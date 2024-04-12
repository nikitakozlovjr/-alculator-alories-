import UserController from "../controllers/user.controller.js";
import User from "../../entities/User.js";
import Guest from '../../entities/Guest.js';

const sessionMidlware = async (req, res, next) => {
    if (req.session.username) {
        req.params.username = req.session.username;
        const {username, first_name, last_name, password} = await new UserController().getUser(req, res);
        res.locals.currentUser = new User(username, first_name, last_name, password);
    } else {
        res.locals.currentUser = new Guest()
    }
    console.log(res.locals.currentUser);
    next()
};

export default sessionMidlware;