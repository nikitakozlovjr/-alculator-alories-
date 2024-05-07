import Express from 'express';
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

router.post('/save', (req, res) => {
    const { normal, low, more } = req.query;
    console.log(parseInt(normal))
    console.log(parseInt(low))
    console.log(parseInt(more))
    res.redirect('/')
})

export default router;