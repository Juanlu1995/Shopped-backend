const Shop = require("../Models/Shop");
const User = require("../Models/User");
const NotPay = require("../Models/NotPay");

/**
 * Insert a NotPay
 * needs a user and a shop
 * @param req request
 * @returns {Promise<>}
 */
const create = async (req) => {

    const userId = req.body.userId;
    const shopId = req.body.shopId;

    const user = await User.findById(userId)
        .then((owner) => {
            return owner;
        }).catch((err) => {
            console.error(err)
        });

    const shop = await Shop.findById(shopId)
        .then((shop) => {
            return shop
        }).catch(err => {
            console.error(err)
        });

    const notPay = new NotPay({
        user: user._id,
        shop: shop._id,
        date: req.body.date || new Date().toISOString(),
        price: req.body.price,

    });
    /**
     * Save the shop
     */
    return notPay.save().exec();
};

/**
 * All controller for Shop
 * @type {{getAll: *, createShop: *}}
 */
const ShopController = {
    create,
};

module.exports = ShopController;
