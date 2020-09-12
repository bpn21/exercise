var express = require('express');
var passwordHash = require('password-hash');
router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var config = require('./../config/config')
var jwt = require('jsonwebtoken')
var UserModel = require('./../model/user.model');
const { json } = require('express');
var mapData = require('./../mapData/mapData');

function createToken(user) {
    var token = jwt.sign({
        username: user.username,
        id: user._id,
    }, config.jwtSecret);
    return token;
}

router.get('/', function (req, res, next) {
    res.render('login')
})

router.get('/register', function (req, res, next) {
    res.render('register');

})

router.put('/:id', function (req, res, next) {
    res.end('i am put from auth')
})
router.post('/login', function (req, res, next) {
    console.log('what comes in: ', req.body)
    UserModel.findOne({
        username: req.body.username,
    }, function (err, user) {
        if (err) {
            return next(err)
        }
        console.log('here', user)
        if (user) {
            var matched = passwordHash.verify(req.body.password, user.password)
            console.log('what comes in user.role', user.role)

            var token = createToken(user);
            if (matched) {
                res.status(200).json({
                    user: user,
                    token: token
                })
            }else{
                next({
                    message:  'password or username is incorrect'
                })
            }

        } else {
            res.status(404).json({
                message: 'user not found',
                status: '404'
            })
        }
    })
})
router.post('/register', function (req, res, next) {
    var newUser = new UserModel();
    var mappedUser = mapData.user(newUser, req.body)
    mappedUser.password = passwordHash.generate(req.body.password)
    console.log('what comes in mapped user', mappedUser)
    mappedUser.save(function (err, done) {
        if (err) {
            return next(err);
        }
        res.status(200).json({ done });
    })
})
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log("req.params.id >>>>>>>>>>>>>>>>>>>>>>.", req.params.id)
    UserModel.findById(id)
        .exec(function (err, user) {
            if (err) {
                next(err);
            }
            if (user) {
                user.remove(function (err, removed) {
                    if (err) {
                        next(err)
                    }
                    if (removed) {
                        res.json({ removed })
                    }
                })
            } else {
                next({
                    message: 'user not found',
                    status: 404
                })
            }

        })
})
module.exports = router;