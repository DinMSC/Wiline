import {
    getUser,
    getUsers,
    createNewUser,
    updateUserByUid,
    deleteUserByUid,
} from '../services/userServices';
import { Request, Response } from 'express';

const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, phoneNumber } = req.query;

        let sqlQuery = 'SELECT * FROM "users" WHERE 1=1';

        if (firstname) {
            sqlQuery += ` AND firstname ILIKE '%${firstname}%'`;
        }

        if (lastname) {
            sqlQuery += ` AND lastname ILIKE '%${lastname}%'`;
        }

        if (email) {
            sqlQuery += ` AND email ILIKE '%${email}%'`;
        }

        if (phoneNumber) {
            sqlQuery += ` AND phonenumber ILIKE '%${phoneNumber}%'`;
        }

        const users = await getUsers(sqlQuery);

        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server error' });
    }
};

const getSingleUserController = async (req: Request, res: Response) => {
    try {
        const uid = req.query.uid as string;
        const user = await getUser(uid);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal Server error' });
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createNewUser(req.body);
        res.status(201).json({ user: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const updateUser = async (req: Request, res: Response) => {
    const uid = req.query.uid as string;
    const updateData = req.body;
    try {
        const updateResult = await updateUserByUid(uid, updateData);

        if (updateResult && updateResult.success) {
            const updatedUser = await getUser(uid);

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(updatedUser);
        } else {
            return res.status(400).json({ message: 'Update failed' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Internal Server Error' });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const uid = req.query.uid as string;
        const deletedUser = await deleteUserByUid(uid);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Deleted User' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal Server error' });
    }
};

export {
    getAllUsersController,
    getSingleUserController,
    createUser,
    updateUser,
    deleteUser,
};
