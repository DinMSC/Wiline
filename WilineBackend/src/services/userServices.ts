import User from "../interfaces/userInterface";
import { getAllUsers, getSingleUser, createUser } from "../models/user";

const getUsers = async () => {
  try {
    const users = await getAllUsers();
    return users;
  } catch (err) {
    throw err;
  }
};

const getUser = async (testId: number) => {
  try {
    const user = await getSingleUser(testId);
    return user;
  } catch (err) {
    throw err;
  }
};

const createNewUser = async (dummyData: User) => {
  try {
    const user = await createUser(dummyData);
    return user;
  } catch (err) {
    throw err;
  }
};

export { getUsers, getUser, createNewUser };
