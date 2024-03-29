import Express from 'express';
import bodyParser from 'body-parser';

const app = new Express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));

export default app;