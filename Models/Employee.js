import {TOKEN_KEY} from "../config";
const mongoose = require('mongoose');
const moment = require('moment');

let employeeSchema = new mongoose.Schema({
    role: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    shop: {type: mongoose.Schema.Types.ObjectId, ref: 'Shop'},
    password: String,
});

employeeSchema.methods.createToken = () => {
  return jwt.encode(
      {
          userId: this.user,
          shopId: this.shop,
          role: this.role,
          created_at: moment().unix(),
          expired_at: moment().add(1, `day`).unix()
      }
      ,TOKEN_KEY);
};

/**
 * Get all Employees from a Store
 * @returns {Promise<Employee>}
 */
employeeSchema.statics.getAll = function () {
    return Employee
        .find({})
        .then((employee) => {
            return employee
        })
        .catch((err) => {
            console.error(err)
        });
};

/**
 * Employee model
 * @type {Model}
 */
const Employee = mongoose.model(
    'Employee',
    employeeSchema
);

module.exports = Employee;
