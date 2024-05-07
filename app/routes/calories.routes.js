import Express from 'express';

const router = new Express();

router.post('/calculation', (req, res) => {
    const { gender, age, height, weight, active } = req.body;

    res.redirect('/calories')
})

export default router;