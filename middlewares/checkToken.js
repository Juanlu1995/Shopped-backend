import {AUTH_TOKEN} from "../constants";
import {TOKEN_KEY} from "../config";

const jwt = require('jwt-simple');
const moment = require('moment');

export const checkToken = (req, res, next) => {
    if (!req.headers[AUTH_TOKEN]) {
        const error = "You must include the header";
        console.error(error);
        return res.status(401).send({
            error: error
        });
    }
    const token = req.headers[AUTH_TOKEN];
    let payload = null;
    try {
        payload = jwt.decode(token, TOKEN_KEY);
    } catch (e) {
        console.error(e);
        return res.status(401).send({error: "Invalid token"});
    }

    if (moment().unix() > payload.expired_at) {
        return res.status(401).send({error: 'Expired token'});
    }

    req.userId = payload.userId;

    next();
};
