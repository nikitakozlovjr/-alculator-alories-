import Express from 'express';
import ResultController from '../controllers/result.controller.js';
import activeCoefficients from '../utils/protein/activeCoefficients.js';
import standard from '../utils/protein/standard.js';
import getCalculation from '../utils/protein/getCalculation.js';

const router = new Express();

router.post('/calculation', (req, res) => {
    const { weight, active } = req.body;
    const { currentUser } = res.locals;
    const activeCoefficient = activeCoefficients[active];
    const calculations = getCalculation(weight, standard, activeCoefficient);
    console.log(calculations);
    const data = {title: "Ваша норма белка", currentUser, calculations, name: 'protein', calculationName: 'г. белка'};
    res.render('results/show', data)
});

router.post('/save', async (req, res) => {
    req.query.name = 'protein';
    await new ResultController().saveResult(req, res);
    res.redirect('/')
})

export default router;