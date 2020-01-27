const faker = require('faker');
const Shop = require("../Models/Shop");
const User = require("../Models/User");
const NotPay = require("../Models/NotPay");

const NOT_PAY_TO_CREATE = 100;
const MIGRATION_NAME = 'NotPay migration';

const startMigration = async () => {
    console.log(`Starting ${MIGRATION_NAME}`);

    const users = await User.getAll();
    const shops = await Shop.getAll();

    for (let i = 0; i < NOT_PAY_TO_CREATE; i++) {
        await new NotPay({
            user: users[faker.random.number(users.length -1)]._id,
            shop: shops[faker.random.number(shops.length -1)]._id,
            date: faker.date.past(),
            price: faker.commerce.price(),
        }).save();
    }

    console.log(`Finishing ${MIGRATION_NAME}`);
};

module.exports = {startMigration};