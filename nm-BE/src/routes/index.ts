import { Router } from "express";

import userRoutes from "./userRoutes";
import loginRoutes from "./loginRoutes";
import nurseRoutes from "./nurseRoutes";
import * as userController from "../controllers/userController";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.use("/register", userController.createUser);
router.use("/login", loginRoutes);

router.use(authenticate);

router.use("/users", userRoutes);
router.use("/nurses", nurseRoutes);

export default router;
