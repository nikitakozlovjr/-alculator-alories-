import app from "../app.js";
import pool from '../db.js'

pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
    } else {
      console.log('Результат запроса:', result.rows[0]);
    }
});

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