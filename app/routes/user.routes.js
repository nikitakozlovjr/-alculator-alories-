import Express from 'express';
import db from '../db.js';
import Encrypt from '../../Encrypt.js'

const router = new Express();

router.post('/user', async (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    const hashPassword = new Encrypt().hash(password);

    const newPerson = await db.query(`INSERT INTO users (username, first_name, last_name, password) VALUES ($1, $2, $3, $4) RETURNING *`, [username, firstName, lastName, hashPassword]);
    res.json(newPerson.rows[0]);
});

router.get('/user/:username', async(req, res) => {
    const username = req.params.username;

    const personData = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    res.json(personData.rows[0])
});

router.put('/user/:username/first_name/:newData', async (req, res) => {
    const username = req.params.username;
    const newData = req.params.newData;

    const updateDataUser = await db.query('UPDATE users SET first_name = $1 WHERE username = $2 RETURNING *', [newData, username]);
    res.json(updateDataUser.rows[0]);
});
router.put('/user/:username/last_name/:newData', async (req, res) => {
    const username = req.params.username;
    const newData = req.params.newData;

    const updateDataUser = await db.query('UPDATE users SET last_name = $1 WHERE username = $2 RETURNING *', [newData, username]);
    res.json(updateDataUser.rows[0]);
});
router.put('/user/:username/username/:newData', async (req, res) => {
    const username = req.params.username;
    const newData = req.params.newData;

    const updateDataUser = await db.query('UPDATE users SET username = $1 WHERE username = $2 RETURNING *', [newData, username]);
    res.json(updateDataUser.rows[0]);
});
router.put('/user/:username/password/:newData', async (req, res) => {
    const username = req.params.username;
    const newData = new Encrypt().hash(req.params.newData);

    const updateDataUser = await db.query('UPDATE users SET password = $1 WHERE username = $2 RETURNING *', [newData, username]);
    res.json(updateDataUser.rows[0]);
});
// router.delete('/user/:username', UserController.deleteUser)

export default router;