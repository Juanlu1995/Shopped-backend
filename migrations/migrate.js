require('dotenv').config();
const mongoose = require('mongoose');


const usersMigrate = require('./users-migrate');
const shopsMigrate = require('./shops-migrate');
const notPayMigrate = require('./notPay-migrate');

//Mongo connect

//Set up default mongoose connection
//TODO: make connection with .env
const mongoDB = `mongodb://shopped:shopped@${process.env.MONGO_HOST}/shopped`;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const migrations = [
    usersMigrate,
    // shopsMigrate,
    // notPayMigrate
];


migrations.forEach(async m => await m.startMigration());