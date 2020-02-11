import {checkToken} from "../middlewares/checkToken";

const express = require('express');
const router = express.Router();
const shopRouter = require('./shopRoute');
const userRouter = require('./userRoute');
const notPayRouter = require('./notPayRoute');
const register = require('./registerRoute');
const login = require('./loginRoute');

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.send("hola");
});

router.use('/login', login);
router.use(checkToken);
router.use('/shop', shopRouter);
router.use('/user',userRouter);
router.use('/notPay',notPayRouter);
router.use('/register', register);
