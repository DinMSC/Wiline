import { getUser, getUsers, createNewUser } from "../services/userServices";
import { Request, Response } from "express";

const dummyData = {
  _id: 1,
  firstname: "Delores",
  lastname: "Mind",
  email: "delores@wiline.com",
  phonenumber: "456784567845678",
};

const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server error" });
  }
};

const getSingleUserController = async (req: Request, res: Response) => {
  const testId = 1;
  try {
    const user = await getUser(testId);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server error" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    console.log(dummyData);
    const user = await createNewUser(dummyData);
    res.status(201).json({ user: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

export { getAllUsersController, getSingleUserController, createUser };
