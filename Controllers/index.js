const ShopController = require('./ShopController');
const UserController = require('./UserController');
const NotPayController = require('./NotPayController');
const EmployeeController = require('./EmployeeController');

const controller = {
    shop: ShopController,
    user: UserController,
    notPay: NotPayController,
    employee: EmployeeController
};

module.exports = controller;
