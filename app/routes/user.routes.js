import Express from 'express';
import UserController from '../controllers/user.controller.js';

const router = new Express();

router.post('/user', await new UserController().createUser);

router.get('/user/:username', await new UserController().getUser);

router.put('/user/:username/firstname', await new UserController().updateFirstNameUser);

router.put('/user/:username/lastname', await new UserController().updateLastNameUser);

router.put('/user/:username/username', await new UserController().updateUsernameUser);

router.put('/user/:username/password', await new UserController().updatePasswordUser);

router.delete('/user/:username', await new UserController().deleteUser);

export default router;