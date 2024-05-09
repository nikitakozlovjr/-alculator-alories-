import Express from 'express';
import ResultController from '../controllers/result.controller.js';
import genderCoefficients from '../utils/balance/genderCoefficients.js';
import getCalculation from '../utils/balance/getCalculation.js';

const router = new Express();

router.post('/calculation', (req, res) => {
    const { gender, weight } = req.body;
    const { currentUser } = res.locals;
    const genderCoefficient = genderCoefficients[gender];
    const calculations = getCalculation(weight, genderCoefficient);
    const data = {title: "Ваша норма воды", currentUser, calculations, name: 'balance', calculationName: 'мл. воды'};
    res.render('results/show', data)
});

router.post('/save', async (req, res) => {
    req.query.name = 'balance';
    await new ResultController().saveResult(req, res);
    res.redirect('/')
})

export default router;