import Express from 'express'

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
    res.render('sections/profile', data)
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
    res.render('sections/postCreate', data)
});

export default router;