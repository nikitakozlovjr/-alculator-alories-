import Express from 'express';
import UserController from '../controllers/user.controller.js';

const router = new Express();

router.post('/user', UserController.createUser)
router.delete('/user', UserController.createUser)
router.post('/user', UserController.createUser)
router.post('/user', UserController.createUser)
router.post('/user', UserController.createUser)

export default router;