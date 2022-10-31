import { Router } from "express";
import upload from "../config/multer";
import * as nurseController from "../controllers/nurseController";

const router = Router();

router.post("/", nurseController.getAllNurses);
router.post("/add", upload.single("photo"), nurseController.createNurse);
router.get("/:id", nurseController.getNurseById);
router.get("/:name", nurseController.getNurseByName);
router.put("/:id", upload.single("photo"), nurseController.updateNurse);
router.delete("/:id", nurseController.deleteNurse);

export default router;
