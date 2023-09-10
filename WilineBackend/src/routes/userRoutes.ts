import express from "express";
import {
  getAllUsersController,
  getSingleUserController,
  createUser,
} from "../controllers/userContorllers";

const router = express.Router();

router.get("/getAllUsers", getAllUsersController);
router.get("/getUser", getSingleUserController);
router.post("/createUser", createUser);

export default router;
