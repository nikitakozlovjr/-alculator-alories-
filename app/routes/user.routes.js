import Express from 'express';
import UserController from '../controllers/user.controller.js';

const router = new Express();

router.post('/users', await new UserController().createUser);

router.get('/users/:username', await new UserController().getUsers);

router.put('/users/:username/firstname', await new UserController().updateFirstNameUser);

router.put('/users/:username/lastname', await new UserController().updateLastNameUser);

router.put('/users/:username/username', await new UserController().updateUsernameUser);

router.put('/users/:username/password', await new UserController().updatePasswordUser);

router.delete('/users/:username', await new UserController().deleteUser);

export default router;