const { jwtSecret } = require("../config/config");
var jwt = require('jsonwebtoken');
const UserModel = require("../model/user.model");
var token;
module.exports = function (req, res, next) {
    if (req.headers['token']) {
        token = req.headers['token']
    }
    if (req.headers['authorization']) {
        token = req.headers['authorization']
    }
    if (token) {
        jwt.verify(token, config.jwtSecret, function (err, decoded) {
            if (err) {
                console.log('i am at error')
                next(err)
            }
            if (decoded) {
                console.log("decoded value is", decoded)
                UserModel.findById(decoded.id)
                    .exec(function (err, user) {
                        if (err) {
                            next(err)
                        } if (user) {
                            req.loggedInUser = user;
                            next();
                        } else {
                            next({
                                message: 'user has already been deleted',
                                status: 404
                            })
                        }
                    })
            }
        })
    } else {
        res.json({
            message: 'token not provided',
            status: 300
        })
    }
}