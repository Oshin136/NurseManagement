import Success from "../domain/Success";
import { Nurse, NurseBeforeUpload, NurseToUpdate } from "../domain/Nurse";
import logger from "../misc/logger";
import NurseModel from "../models/NurseModel";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

export const getAllNurses = async (id: number): Promise<Success<Nurse>> => {
  logger.info("Getting all contacts");
  const allNurses = await NurseModel.getAllNurses(id);
  return {
    data: allNurses,
    message: "Nurses festched successfully",
  };
};

export const getNurseById = async (id: number): Promise<Success<Nurse>> => {
  logger.info("Getting Nurse by ID");
  const nurse = await NurseModel.getNurseById(id);
  return {
    data: nurse,
    message: "Nurse fetched successfully",
  };
};

export const getNurseByName = async (name: string): Promise<Success<Nurse>> => {
  logger.info("Getting Nurse by name");
  const nurse = await NurseModel.getNurseByName(name);
  return {
    data: nurse,
    message: "Nurse fetched sucessfully",
  };
};

export const createNurse = async (
  nurse: NurseBeforeUpload,
  filePath: string
): Promise<Success<Nurse>> => {
  logger.info("Creating a new Nurse account!!");

  try {
    // checks if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found!!");
    }

    // uploads the image to cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
      use_filename: true,
      width: 500,
      height: 500,
      crop: "limit",
    });

    // Delets the file from the server
    fs.unlinkSync(filePath);

    // Create a new contact on the database
    const newNurse = await NurseModel.createNurse({
      ...nurse,
      photo: result.url,
    });

    return {
      data: newNurse,
      message: "Successfully created a  new Nurse account",
    };
  } catch (error) {
    // Logs the error
    logger.error(error);

    // Deletes the file from the server
    fs.unlinkSync(filePath);

    return {
      message: "Could not create the account!!",
    };
  }
};

export const updateNurse = async (
  nurse: NurseToUpdate,
  filePath: string
): Promise<Success<Nurse>> => {
  logger.info("Getting Nurse by id!!");

  try {
    // checks if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found!!");
    }

    // uploads the image to cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
      uplad_preset: "nurse-management",
      use_filename: true,
      invalidate: true,
    });

    // Delets the file from the server
    fs.unlinkSync(filePath);

    // Create a new contact on the database
    const updatedNurse = await NurseModel.updateNurse({
      ...nurse,
      photo: result.url,
    });

    return {
      data: updatedNurse,
      message: "Successfully updated a account",
    };
  } catch (error) {
    // Logs the error
    logger.error(error);

    // Deletes the file from the server
    fs.unlinkSync(filePath);

    return {
      message: "Could not update the account!!",
    };
  }
};

export const deleteNurse = async (id: number): Promise<Success<Nurse>> => {
  logger.info("Deleting an account");
  await NurseModel.deleteNurse(id);
  return {
    message: "account deleted successfully",
  };
};
