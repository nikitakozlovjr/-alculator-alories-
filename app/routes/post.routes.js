import Express from 'express';
import PostController from '../controllers/post.controller.js';

const router = new Express();

router.post('/', async (req, res) => {
    await new PostController().createPost(req, res);
    res.redirect('/profile')
});

export default router;