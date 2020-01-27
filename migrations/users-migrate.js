const faker = require('faker');
const User = require("../Models/User");

const USERS_TO_CREATE = 500;
const MIGRATION_NAME = 'User migration';

const startMigration = async () => {
    console.log(`Starting ${MIGRATION_NAME}`);

    for (let i = 0; i < USERS_TO_CREATE; i++) {
        await new User({
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetName(),
        }).save();
    }

    console.log(`Finishing ${MIGRATION_NAME}`);
};

module.exports = {startMigration};