import Express from 'express';
import PostController from '../controllers/post.controller.js';

const router = new Express();

router.post('/', async (req, res) => {
    await new PostController().createPost(req, res);
    res.redirect('/profile')
});

router.get('/:id', async (req, res) => {
    const { currentUser } = res.locals;
    const post = await new PostController().getPost(req, res);
    const data = {title: `${post.title}`, currentUser, post};
    res.render('sections/post', data)
})
export default router;