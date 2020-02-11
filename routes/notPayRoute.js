const router = require('express').Router();
const controller = require('../Controllers/index');


//TODO: midleware de securizacion

/**
 * Post request /shop
 */
router.post('/', function (req, res) {
    controller.notPay.create(req)
        .then(users => {
            res.json(users)
        }).catch(err => {
            console.error(err)
        }
    );
});

module.exports = router;
