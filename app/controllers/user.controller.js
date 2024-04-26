import Encrypt from '../../Encrypt.js';
import db from '../db/db.js';

class UserController {
    async createUser(req, __res) {
        const { username, firstName, lastName, password } = req.body;
        const hashPassword = new Encrypt().hash(password);

        const newPerson = await db.query(`
            INSERT INTO users (username, first_name, last_name, password) 
            VALUES 
                ($1, $2, $3, $4) 
            RETURNING *`, [username, firstName, lastName, hashPassword]
        );
        
        return newPerson.rows[0];
    };

    async getUser(req, __res) {
        const username = req.params.username;
        const personData = await db.query('SELECT * FROM users WHERE username = $1', [username]);

        return personData.rows[0];
    };

    async getUsers(__req, __res) {
        const usersData = await db.query('SELECT * FROM users');

        return usersData.rows;
    };

    async updateUsernameUser(req, __res) {
        const username = req.params.username;
        const {newUsername} = req.body

        const updateDataUser = await db.query(`
            UPDATE users 
            SET username = $1 
            WHERE username = $2 
            RETURNING *`, [newUsername, username]
        );

        return updateDataUser.rows[0];
    };

    async updateFirstNameUser(req, __res) {
        const username = req.params.username;
        const {firstName} = req.body;

        const updateDataUser = await db.query(`
            UPDATE users 
            SET first_name = $1 
            WHERE username = $2 
            RETURNING *`, [firstName, username]
        );

        return updateDataUser.rows[0];
    };

    async updateLastNameUser(req, __res) {
        const username = req.params.username;
        const {lastName} = req.body;

        const updateDataUser = await db.query(`
            UPDATE users 
            SET last_name = $1 
            WHERE username = $2 
            RETURNING *`, [lastName, username]
        );

        return updateDataUser.rows[0];
    };
    async updatePasswordUser(req, __res) {
        const username = req.params.username;
        const {password} = req.body;
        const newPassword = new Encrypt().hash(password);

        const updateDataUser = await db.query(`
            UPDATE users 
            SET password = $1 
            WHERE username = $2 
            RETURNING *`, [newPassword, username]
        );

        return updateDataUser.rows[0];
    };
    async deleteUser(req, __res) {
        const username = req.session.username;
        
        const deleteDataUser = await db.query(`
            DELETE FROM users
            WHERE username = $1
            RETURNING *`, [username]
        );
        
        return deleteDataUser.rows[0];
    } 
};

export default UserController