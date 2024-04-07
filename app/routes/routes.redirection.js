import Express from 'express'

const router = new Express()

router.get('/', (req, res) => {
    const data = {title: "Главная"};
    res.render('sections/main', data);
})

router.get('/calories', (req, res) => {
    const data = {title: "Твои калории"};
    res.render('sections/calories', data)
})

router.get('/balance', (req, res) => {
    const data = {title: "Водяной баланс"};
    res.render('sections/balance', data)
})

router.get('/protein', (req, res) => {
    const data = {title: "Водяной баланс"};
    res.render('sections/protein', data)
});


export default router;