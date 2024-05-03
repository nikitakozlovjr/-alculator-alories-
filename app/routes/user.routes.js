import Express from 'express';
import UserController from '../controllers/user.controller.js';

const router = new Express();

router.post('/', await new UserController().createUser);

router.get('/', await new UserController().getUsers);

router.put('/username', async (req, res) => {
    await new UserController().updateUsernameUser(req, res);
    res.redirect('/profile');
});

router.put('/firstname', async (req, res) => {
    await new UserController().updateFirstNameUser(req, res);
    res.redirect('/profile');
});

router.put('/lastname', async (req, res) => {
    await new UserController().updateLastNameUser(req, res);
    res.redirect('/profile');
});

router.put('/password', async (req, res) => {
    await new UserController().updatePasswordUser(req, res);
    res.redirect('/profile');
});

export default router;