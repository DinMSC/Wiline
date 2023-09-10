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

export const getSingleUser = async (uid: string) => {
    try {
        const user = await pool.query(GET_SINGLE_USER_BY_UID, [uid]);
        return user.rows[0];
    } catch (err) {
        throw err;
    }
};

export const createUser = async (data: User) => {
    const { uid, firstname, lastname, email, phonenumber } = data;
    try {
        const user = await pool.query(CREATE_USER, [
            uid,
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

export const updateUser = async (uid: string, data: User) => {
    const { firstname, lastname, email, phonenumber } = data;
    try {
        await pool.query(UPDATE_USER_BY_UID, [
            firstname,
            lastname,
            email,
            phonenumber,
            uid,
        ]);
        return { success: true };
    } catch (err) {
        throw err;
    }
};

export const deleteUser = async (uid: string) => {
    try {
        await pool.query(DELETE_USER, [uid]);
        return { success: true };
    } catch (err) {
        throw err;
    }
};
