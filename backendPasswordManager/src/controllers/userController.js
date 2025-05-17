import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userController = {
    // Register a new user
    register: async (req, res) => {
        const { username, password } = req.body;
        try {
            // Check the user alredy exists
            const existingUser = await User.getUserByUsername(username);
            if (existingUser) {
                return res.status(400).json({ message: 'El usuario ya existe' });
            }
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create user
            const newUser = {
                username: username.trim(),
                password: hashedPassword,
            };
            const result = await User.createUser(newUser);
            return res.status(201).json({ message: 'Usuario creado con exito', userId: result.insertId });
        } catch (error) {
            console.log('Error al registrar el usuario:', error);
            return res.status(500).json({ message: 'Error al registrar el usuario' });
        }
    }
};

export default userController;