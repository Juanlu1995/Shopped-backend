const Shop = require("../Models/Shop");
const User = require("../Models/User");

/**
 * Insert a Shop and return all shops
 * needs a owner.email and an array with ids of his employees
 * @param req request
 * @returns {Promise<Shops>}
 */
const createShop = async (req) => {

    /**
     * Get the owner
     * @type {User || Error}
     */
    const owner = await User.findByEmail(req.body.owner.email)
        .then((owner) => {
            return owner;
        }).catch((err) => {
                console.error(err)
            }
        );
    /**
     * Get the employees
     * @type {[User] || Error}
     */
    const employees = await User.findByIds(req.body.employees)
        .then(emp => {
            return emp
        }).catch(err => {
            console.error(err)
        });

    /**
     * Create the shop
     */
    const shop = new Shop({
        name: req.body.name,
        owner: owner._id || null,
        employees: employees || owner._id || null
    });

    /**
     * Save the shop
     */
    return shop.save()
        .then(() => {
            return Shop.getAll();
        }).catch(err => {
            console.error(err)
        })
};

const index = async () => {
    return await Shop.getAll()
};


/**
 * All controller for Shop
 * @type {{getAll: *, createShop: *}}
 */
const ShopController = {
    createShop,
    index
};

module.exports = ShopController;
