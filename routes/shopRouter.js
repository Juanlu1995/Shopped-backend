const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

/**
 * Get request /shop
 */
router.get('/', function (req, res, next) {
    controller.shop.index()
        .then(shops => {
                res.json(shops)
            }
        ).catch(err => {
            console.error(err);
        }
    )
});

/**
 * Post request
 */
router.post('/', function (req, res) {
    controller.shop.createShop(req)
        .then((shops) => {
            res.json(shops);
        })
});

module.exports = router;
