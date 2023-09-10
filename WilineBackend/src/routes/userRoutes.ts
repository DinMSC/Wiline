import express from 'express';
import {
    getAllUsersController,
    getSingleUserController,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userContorllers';

const router = express.Router();

router.get('/getAllUsers', getAllUsersController);
router.get('/getUser', getSingleUserController);
router.post('/createUser', createUser);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;
