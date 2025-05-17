import connection from '../config/database.js';

const User = {
    // Create a new user
    createUser: async (user) => {
        const { username, password } = user;
        const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
        const [result] = await connection.promise().query(query, [username, password]);
        return result;
}, 
    // Get user by username
    getUserByUsername: async (username) => {
        const query = 'SELECT * FROM Users WHERE username = ?';
        const [rows] = await connection.promise().query(query, [username.trim()]);
        return rows [0];
    },
};

export default User; 