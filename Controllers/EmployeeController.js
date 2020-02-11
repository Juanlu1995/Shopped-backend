import {EMPLOYEE_ROLES} from "../constants";

const Shop = require("../Models/Shop");
const User = require("../Models/User");
const Employee = require("../Models/Employee");

/*
* Insert a Employee
* needs a user, a shop and a password
* @param req request
* @returns {Promise<>}
*/
const create = async (req, res) => {

    const userId = req.body.userId;
    const shopId = req.body.shopId;

    const user = await User.findById(userId)
        .then((owner) => {
            return owner;
        }).catch((err) => {
            console.error(err);
            return null;
        });

    const shop = await Shop.findById(shopId)
        .then((shop) => {
            return shop;
        }).catch(err => {
            console.error(err);
            return null;
        });

    const password = req.body.password.length ? bcrypt.hashSync(req.body.password, 10) : null;

    let role = req.body.role;

    role = EMPLOYEE_ROLES.some(role) ? role : null;

    if (role && shop && user && password) {
        /**
         * Save the employee
         */
        const employee = new Employee({
            user: user,
            shop: shop,
            password: password,
            role: role
        });
        await employee.save();
        return employee;
    } else {
        console.error(`Some parameter is null`)
    }
};


const login = async (req, res) => {
    const employees = Employee.findOne()
        .populate({
            path: 'user',
            match: {
                email: req.body.email
            }
        })
        .populate(`shop`);

    const employee = employees.find(x => bcrypt.compareSync(req.body.password, x.password));

    if (!employee) {
        console.error(`Doesn't match any employee with those credentials`);
        res.send(401);
    } else {
        res.json({
            data: employee.createToken(),
            message: `Login successful`
        });
    }

};


/**
 * All controller for Register
 * @type {{getAll: *, createShop: *}}
 */
const EmployeeController = {
    create,
    login
};

module.exports = EmployeeController;
