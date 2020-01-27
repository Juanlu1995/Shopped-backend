const ShopController = require('./ShopController');
const UserController = require('./UserController');
const NotPayController = require('./NotPayController');

const controller = {
    shop: ShopController,
    user: UserController,
    notPay: NotPayController
};

module.exports = controller;
