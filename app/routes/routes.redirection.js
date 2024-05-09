import Express from 'express';
import PostsController from '../controllers/post.controller.js';
import CalculationController from '../controllers/calculation.controller.js';
import calculationName from '../utils/calculations/calculationName.js';

const router = new Express()

router.get('/', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Главная", currentUser};
    res.render('sections/main', data);
})

router.get('/calories', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Калькулятор калорий", currentUser};
    res.render('sections/calories', data)
})

router.get('/balance', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Водяной баланс", currentUser};
    res.render('sections/balance', data)
})

router.get('/protein', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Расчет белка", currentUser};
    res.render('sections/protein', data)
});

router.get('/profile', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Профиль", currentUser};
    res.render('users/profile', data)
})

router.get('/log', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Регистрация", currentUser};
    res.render('session/new', data)
});

router.get('/entrance', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Вход", currentUser};
    res.render('session/entrance', data)
});

router.get('/postcreate', (req, res) => {
    const { currentUser } = res.locals;
    const data = {title: "Создание поста", currentUser};
    res.render('posts/postCreate', data)
});

router.get('/postsusers', async (req, res) => {
    const { currentUser } = res.locals;
    const posts = await new PostsController().getPosts(req, res);
    const data = {title: "Советы пользователей", currentUser, posts};
    res.render('posts/usersPosts', data);
});

router.get('/calculations', async (req, res) => {
    const { currentUser } = res.locals; 
    const calculationsData = await new CalculationController().getCalculations(req, res);
    const calculations = calculationsData.map((calculation) => {
        calculation['name'] = calculationName[calculation['name']];
        return calculation;
    });

    const data = {title: "Советы пользователей", currentUser, calculations};
    res.render('sections/calculations', data);
});

export default router;