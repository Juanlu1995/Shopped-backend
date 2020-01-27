const User = require("../Models/User");

/**
 * Insert a User and return all users
 * @param req request
 * @returns {Promise<User>}
 */
const createUser = (req) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
    });
    return user.save()
        .then(() => {
            return User.getAll();
        })
        .catch((err) => {
            console.error(err);
        });
};

const index = async () => {
    try {
        return await User.getAll();
    } catch (e) {
        console.log(e);
        return null
    }
};

/**
 * All controller for User
 * @type {{getAll: *, createUser: *}}
 */
const UserController = {
    createUser,
    index
};

module.exports = UserController;
