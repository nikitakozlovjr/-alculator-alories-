import Express from 'express';
import UserController from '../controllers/user.controller.js';

const router = new Express();

router.post('/', await new UserController().createUser);

router.get('/:username', await new UserController().getUsers);

router.put('/:username/firstname', await new UserController().updateFirstNameUser);

router.put('/:username/lastname', await new UserController().updateLastNameUser);

router.put('/:username/username', await new UserController().updateUsernameUser);

router.put('/:username/password', await new UserController().updatePasswordUser);

router.delete('/:username', await new UserController().deleteUser);

export default router;