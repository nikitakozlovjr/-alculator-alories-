import Express from 'express';
import userRedirection from './routes/routes.redirection.js';
import userRoutes from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';
import sessionRoutes from './routes/session.routes.js';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import session from 'express-session';
import express from 'express';
import sessionMidlware from './middleware/session.middleware.js';

const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use(express.json());

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
  }));


app.use(sessionMidlware);
app.set('view engine', 'pug');


app.use('/session', sessionRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRouter);
app.use(userRedirection);

export default app;