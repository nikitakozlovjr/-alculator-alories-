import Express from 'express';
import UserController from '../controllers/user.controller.js';

const router = new Express();

router.post('/user', (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    console.log(username, firstName, lastName, password)
    res.json("Ok");
})
// router.get('/user/:username', UserController.getUser)
// router.put('/user/:username/:option', UserController.updateUser)
// router.delete('/user/:username', UserController.deleteUser)

export default router;