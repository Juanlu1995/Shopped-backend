const faker = require('faker');
const Shop = require("../Models/Shop");
const User = require("../Models/User");

const SHOPS_TO_CREATE = 200;
const MIGRATION_NAME = 'Shops migration';

const startMigration = async () => {
    console.log(`Starting ${MIGRATION_NAME}`);

    const users = await User.getAll();

    let employees = [];
    for (let i = 0; i < SHOPS_TO_CREATE; i++) {
        for (
            let j = 0;
            j < i % 2 === 0
                ? faker.random.number(3)
                : 0;
            j++
        ) {
            employees.push(users[faker.random.number(users.length)]._id)
        }
        await new Shop({
            name: faker.company.companyName(),
            owner: users[faker.random.number(users.length -1)]._id,
            employees: employees,
        }).save();
        employees = [];
    }

    console.log(`Finishing ${MIGRATION_NAME}`);
};

module.exports = {startMigration};