import Express from 'express';
import userRedirection from './routes/routes.redirection.js';
import userRoutes from './routes/user.routes.js';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import express from 'express';

const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json())

app.set('view engine', 'pug');

app.use("/api", userRoutes);
app.use(userRedirection)

export default app;