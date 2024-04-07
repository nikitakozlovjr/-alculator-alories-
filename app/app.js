import Express from 'express';
import bodyParser from 'body-parser';
import userRedirection from './routes/routes.redirection.js';
import userRoutes from './routes/user.controller.js';
import methodOverride from 'method-override';

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'pug');

app.use("/api", userRoutes);
app.use(userRedirection)

export default app;