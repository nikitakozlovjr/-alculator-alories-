import app from "./app.js";

app.get('/', (req, res) => {
    const data = {title: "Главная"};
    res.render('sections/main', data);
})

app.get('/calories', (req, res) => {
    const data = {title: "Твои калории"};
    res.render('sections/calories', data)
})

app.get('/balance', (req, res) => {
    const data = {title: "Водяной баланс"};
    res.render('sections/balance', data)
})

app.get('/protein', (req, res) => {
    const data = {title: "Водяной баланс"};
    res.render('sections/protein', data)
});

export default app;