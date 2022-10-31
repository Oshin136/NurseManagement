export interface Nurse{
    id:number;
    name:string;
    contact:string;
    email:string;
    address:string;
    photo:string;
    rounding_manager:boolean;
    user_id:number
}

export type NurseToInsert = Omit<Nurse,"id">;

export type NurseBeforeUpload = Omit<
Nurse,
  "id" | "photo" 
>;

export type NurseToUpdate = Omit<Nurse, "photo">;

