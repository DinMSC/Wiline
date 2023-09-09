import express from 'express';
import {
    getAllUsersController,
    getSingleUserController,
} from '../controllers/userContorllers';

const router = express.Router();

router.get('/getAllUsers', getAllUsersController);
router.get('/getUser', getSingleUserController);

export default router;
