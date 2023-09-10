import { getAllUsers, getSingleUser } from "../models/user";

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

export { getUsers, getUser };
