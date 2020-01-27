const mongoose = require('mongoose');

let shopSchema = new mongoose.Schema({
    name: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    employees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});


/**
 * Get all Shops
 * @returns {Promise<Shop>}
 */
shopSchema.statics.getAll = function () {
    return Shop
        .find({})
        .then((shops) => {
            return shops
        })
        .catch((err) => {
            console.error(err)
        });
};

/**
 * Shop model
 * @type {Model}
 */
const Shop = mongoose.model(
    'Shop',
    shopSchema
);

module.exports = Shop;
