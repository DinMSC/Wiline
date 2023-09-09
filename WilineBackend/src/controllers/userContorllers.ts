import { getUser, getUsers } from '../services/userServices';
import { Request, Response } from 'express';

const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal Server error' });
    }
};

const getSingleUserController = async (req: Request, res: Response) => {
    const testId = 1;
    try {
        const user = await getUser(testId);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal Server error' });
    }
};

export { getAllUsersController, getSingleUserController };
