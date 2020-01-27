const express = require('express');
const router = express.Router();
const shopRouter = require('./shopRouter');
const userRouter = require('./userRouter');
const notPayRouter = require('./notPayRouter');

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.send("hola");
});

router.use('/shop', shopRouter);
router.use('/user',userRouter);
router.use('/notPay',notPayRouter);

module.exports = router;
