import { Request, Response, NextFunction } from "express";
import * as nurseService from "../services/nurseService";

export const getAllNurses = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  nurseService
    .getAllNurses(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const getNurseById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  nurseService
    .getNurseById(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const getNurseByName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  nurseService
    .getNurseByName(name)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const createNurse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, contact, email, address, user_id, rounding_manager } = req.body;
  const fileString = req.file?.path as string;

  nurseService
    .createNurse(
      {
        name,
        contact,
        email,
        address,
        user_id,
        rounding_manager,
      },
      fileString
    )
    .then((data) => res.json(data))
    .catch((error) => next(error));
};

export const updateNurse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, name, contact, email, address, user_id, rounding_manager } =
    req.body;
  const fileString = req.file?.path as string;
  nurseService
    .updateNurse(
      {
        id,
        name,
        contact,
        email,
        address,
        user_id,
        rounding_manager,
      },
      fileString
    )
    .then((data) => res.json(data))
    .catch((error) => next(error));
};

export const deleteNurse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  nurseService
    .deleteNurse(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
