import Encrypt from '../../Encrypt.js';
import db from '../db/db.js';

class UserController {
    async createUser(req, res) {
        const { username, firstName, lastName, password } = req.body;
        const hashPassword = new Encrypt().hash(password);

        const newPerson = await db.query(`
            INSERT INTO users (username, first_name, last_name, password) 
            VALUES 
                ($1, $2, $3, $4) 
            RETURNING *`, [username, firstName, lastName, hashPassword]
        );
        res.json(newPerson.rows[0]);
    };

    async getUser(req, res) {
        const username = req.params.username;
        const personData = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        res.json(personData.rows[0])
    };

    async updateUsernameUser(req, res) {
        const username = req.params.username;
        const {newUsername} = req.body

        const updateDataUser = await db.query(`
            UPDATE users 
            SET username = $1 
            WHERE username = $2 
            RETURNING *`, [newUsername, username]
        );
        res.json(updateDataUser.rows[0]);
    };

    async updateFirstNameUser(req, res) {
        const username = req.params.username;
        const {firstName} = req.body;

        const updateDataUser = await db.query(`
            UPDATE users 
            SET first_name = $1 
            WHERE username = $2 
            RETURNING *`, [firstName, username]
        );
        res.json(updateDataUser.rows[0]);
    };

    async updateLastNameUser(req, res) {
        const username = req.params.username;
        const {lastName} = req.body;

        const updateDataUser = await db.query(`
            UPDATE users 
            SET last_name = $1 
            WHERE username = $2 
            RETURNING *`, [lastName, username]
        );
        res.json(updateDataUser.rows[0]);
    };
    async updatePasswordUser(req, res) {
        const username = req.params.username;
        const {password} = req.body;
        const newPassword = new Encrypt().hash(password);

        const updateDataUser = await db.query(`
            UPDATE users 
            SET password = $1 
            WHERE username = $2 
            RETURNING *`, [newPassword, username]
        );
        res.json(updateDataUser.rows[0]);
    };
    async deleteUser(req, res) {
        const username = req.params.username;

        const deleteDataUser = await db.query(`
            DELETE FROM users
            WHERE username = $1
            RETURNING *`, [username]
        );
        
        res.json(deleteDataUser.rows[0]);
    } 
};

export default UserController