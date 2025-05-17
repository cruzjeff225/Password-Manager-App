import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();


// Route to register a new user
router.post('/register', userController.register);

export default router;
