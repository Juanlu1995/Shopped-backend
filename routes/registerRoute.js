const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

router.post('/employee', async (req, res) => {
    controller.employee.create(req)
        .then(users => {
            res.json(users)
        }).catch(err => {
            console.error(err)
        }
    );
});
module.exports = router;