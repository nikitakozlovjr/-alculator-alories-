import Express from "express";
import UserController from '../controllers/user.controller.js';
import findUser from "../utils/users/findUser.js";
import Encrypt from "../../Encrypt.js";

const router = new Express();

router.post('/new', async (req, res) => {
    const newDataUser = await new UserController().createUser(req, res);
    req.session.username = newDataUser.username;
    res.redirect('/');
});

router.post('/entrance', async (req, res) => {
    const users = await new UserController().getUsers(req, res);
    const {username, password} = req.body;
    const dataUser = findUser(users, username);
    
    if(dataUser) {

        if(new Encrypt().compare(password, dataUser.password)) {
            req.session.username = username;
            res.redirect('/');
            return;
        };

        res.json(`[errors: ["Неверный пароль"]]`);
        return;
    };

    res.json(`[errors: ["Пользователь с таким логином не найден"]]`);
    return;
});

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

router.delete('/deleteUser', async (req, res) => {
    await new UserController().deleteUser(req, res);
    
    req.session.destroy(() => {
        res.redirect('/');
    })
});

export default router;