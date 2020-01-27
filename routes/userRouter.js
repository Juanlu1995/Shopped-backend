const router = require('express').Router();
const controller = require('../Controllers/index');

/**
 * Get request /user
 */
router.get('/', function (req, res, next) {
    controller.user.index()
        .then(shops => {
            res.json(shops)
        }).catch(err => {
            console.error(err);
        }
    );
});

/**
 * Post request /shop
 */
router.post('/', function (req, res) {
    controller.user.createUser(req)
        .then(users => {
            res.json(users)
        }).catch(err => {
            console.error(err)
        }
    );
});

module.exports = router;
