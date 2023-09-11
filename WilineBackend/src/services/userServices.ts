import User from '../interfaces/userInterface';
import {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} from '../models/user';

const getUsers = async (sqlQuery: string) => {
    try {
        const users = await getAllUsers(sqlQuery);
        return users;
    } catch (err) {
        throw err;
    }
};

const getUser = async (_id: string) => {
    try {
        const user = await getSingleUser(_id);
        return user;
    } catch (err) {
        throw err;
    }
};

const createNewUser = async (data: User) => {
    try {
        const user = await createUser(data);
        return user;
    } catch (err) {
        throw err;
    }
};

const updateUserByUid = async (updateData: User) => {
    try {
        const updatedUser = await updateUser(updateData);
        if (updatedUser.success) {
            return { success: true };
        }
    } catch (err) {
        throw err;
    }
};

const deleteUserByUid = async (_id: string) => {
    try {
        const deletedUser = await deleteUser(_id);
        if (deletedUser.success) {
            return { success: true };
        }
    } catch (err) {
        throw err;
    }
};

export { getUsers, getUser, createNewUser, updateUserByUid, deleteUserByUid };
