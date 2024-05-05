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
    res.render('posts/show', data);
});

router.post('/search', async (req, res) => {
    const { currentUser } = res.locals;
    const { searchParam } = req.body;
    let posts;
    if (searchParam.trim().length === 0) {
        posts = await new PostController().getPosts(req, res);
    } else {
        posts = await new PostController().searchPost(req, res);
    };
    const data = {title: "Результат поиска", currentUser, posts};
    res.render('posts/usersPosts', data);
});

export default router;