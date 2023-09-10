import {
  CREATE_USER,
  GET_ALL_USERS,
  GET_SINGLE_USER_BY_ID,
} from "../config/constants/userConstants";
import pool from "../config/db";
import User from "../interfaces/userInterface";

export const getAllUsers = async () => {
  try {
    const users = await pool.query(GET_ALL_USERS);
    return users.rows;
  } catch (err) {
    throw err;
  }
};

export const getSingleUser = async (_id: number) => {
  try {
    const user = await pool.query(GET_SINGLE_USER_BY_ID, [_id]);
    return user.rows[0];
  } catch (err) {
    throw err;
  }
};

export const createUser = async (dummyData: User) => {
  const { _id, firstname, lastname, email, phonenumber } = dummyData;
  try {
    const user = await pool.query(CREATE_USER, [
      _id,
      firstname,
      lastname,
      email,
      phonenumber,
    ]);
    return user.rows[0];
  } catch (err) {
    throw err;
  }
};
