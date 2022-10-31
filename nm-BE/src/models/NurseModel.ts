import db from "../db/db";

import { Nurse, NurseToInsert } from "../domain/Nurse";

class NurseModel {
  public static table = "nurses";

  public static async getAllNurses(id: number) {
    const allNurses = await db(NurseModel.table)
      .select(
        "id",
        "name",
        "contact",
        "email",
        "address",
        "photo",
        "rounding_manager"
      )
      .where({ user_id: id })
      .orderBy("rounding_manager", "desc")
      .orderBy("name", "desc");
    return allNurses;
  }

  public static async getNurseById(id: number) {
    const nurses = await db(NurseModel.table).where({ id }).first();

    return nurses;
  }

  public static async getNurseByName(name: string) {
    const nurse = await db(NurseModel.table).where({ name }).first();

    return nurse;
  }

  public static async createNurse(nurse: NurseToInsert) {
    const newNurse = await db(NurseModel.table).insert(nurse).returning("*");

    return newNurse;
  }

  public static async updateNurse(nurse: Nurse) {
    const updatedNurse = await db(NurseModel.table)
      .where({ id: nurse.id })
      .update(nurse)
      .returning("*");

    return updatedNurse;
  }

  public static async deleteNurse(id: number) {
    await db(NurseModel.table).where({ id }).delete();

    return;
  }
}

export default NurseModel;
