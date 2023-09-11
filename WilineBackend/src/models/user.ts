import {
    CREATE_USER,
    DELETE_USER,
    GET_SINGLE_USER_BY_UID,
    UPDATE_USER_BY_UID,
} from '../config/constants/userConstants';
import pool from '../config/db';
import User from '../interfaces/userInterface';

export const getAllUsers = async (sqlQuery: string) => {
    try {
        const users = await pool.query(sqlQuery);
        return users.rows;
    } catch (err) {
        throw err;
    }
};

export const getSingleUser = async (_id: string) => {
    try {
        const user = await pool.query(GET_SINGLE_USER_BY_UID, [_id]);
        return user.rows[0];
    } catch (err) {
        throw err;
    }
};

export const createUser = async (data: User) => {
    const { firstname, lastname, email, phonenumber } = data;
    try {
        const user = await pool.query(CREATE_USER, [
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

export const updateUser = async (data: User) => {
    const { _id, firstname, lastname, email, phonenumber } = data;
    try {
        await pool.query(UPDATE_USER_BY_UID, [
            firstname,
            lastname,
            email,
            phonenumber,
            _id,
        ]);
        return { success: true };
    } catch (err) {
        throw err;
    }
};

export const deleteUser = async (_id: string) => {
    try {
        await pool.query(DELETE_USER, [_id]);
        return { success: true };
    } catch (err) {
        throw err;
    }
};
