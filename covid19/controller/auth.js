var express = require('express');
router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var config = require('./../config/config')
var jwt = require('jsonwebtoken')
var UserModel = require('./../model/user.model');
const { json } = require('express');

function createToken(user) {
    var token = jwt.sign({
        username: user.username,
        id: user._id,
        role: user.role
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
        password: req.body.password
    }, function (err, user) {
        if (err) {
            return next(err)
        }
        console.log('here', user)
        if (user) {
            console.log('what comes in user.role', user.role)

            var token = createToken(user);
            res.status(200).json({
                user: user,
                token: token
            })
        } else {
            res.status(404).json({
                message: 'user not found',
                status: '404'
            })
        }
    })
})
router.post('/register', function (req, res, next) {
    console.log('register data is here ', req.body)
    console.log('role data is here ', req.headers.role)

    var newUser = new UserModel();
    if (req.body.firstName)
        newUser.firstName = req.body.firstName;
    if (req.body.lastName)
        newUser.lastName = req.body.lastName;
    if (req.body.email)
        newUser.email = req.body.email;
    if (req.body.gender)
        newUser.gender = req.body.gender;
    if (req.body.date)
        newUser.date = new date(req.body.date);
    if (req.body.temporaryAddress || req.body.temporaryAddress)
        newUser.address = {
            temporaryAddress: req.body.temporaryAddress,
            permanentAddress: req.body.permanentAddress,
        };
    // newUser.dob = new date(req.body.dob),
    if (req.body.password)
        newUser.password = req.body.password;
    if (req.body.username)
        newUser.username = req.body.username;
    if (req.body.gender)
        newUser.gender = req.body.gender;
    if (req.headers.role)
        newUser.role = req.headers.role
    // newUser.createdAt = new date();

    newUser.save(function (err, done) {
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