const mongoose = require('mongoose');

/**
 * NotPay schema
 */
let notPaySchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    shop: {type: mongoose.Schema.Types.ObjectId, ref: 'Shop'},
    //TODO: article
    date: Date,
    price: Number,
});

/**
 * Search an list of NotPay by email
 * @param user String | User
 * @returns {[NotPay]|| Error}
 */
notPaySchema.statics.findByUser = async function (user) {
    user = user instanceof User ? user._id : user;

    return await User.find({'user': user})
        .then(np => {
            return np
        }).catch(err => {
            console.error(err)
        })
};

/**
 * NotPay model
 * @type {Model} NotPay
 */
const NotPay = mongoose.model('NotPay', notPaySchema);

module.exports = NotPay;
