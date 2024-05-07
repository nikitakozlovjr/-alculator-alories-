import Express from 'express';
import ResultController from '../controllers/result.controller.js';
import activeCoefficients from '../utils/calories/activeCoefficients.js';
import genderCoefficients from '../utils/calories/genderCoefficients.js';
import getCalculation from '../utils/calories/getCalculation.js';

const router = new Express();

router.post('/calculation', (req, res) => {
    const { gender, age, height, weight, active } = req.body;
    const { currentUser } = res.locals;
    const genderCoefficient = genderCoefficients[gender];
    const activeCoefficient = activeCoefficients[active];
    const calculations = getCalculation(activeCoefficient, weight, height, age, genderCoefficient);
    const data = {title: "Ваша норма калориев", currentUser, calculations};
    res.render('results/show', data)
});

router.post('/save', async (req, res) => {
    req.query.name = 'calories';
    await new ResultController().saveResult(req, res);
    res.redirect('/')
})

export default router;