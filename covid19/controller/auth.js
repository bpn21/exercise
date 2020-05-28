var express = require('express');
router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var config = require('./../config/config')
var jwt = require('jsonwebtoken')
var UserModel = require('./../model/user.model')

function createToken(data) {
    var token = jwt.sign({
        username: data.username,
        id: data._id
    }, config.jwtSecret);
    console.log('what comes in token inside function')
    return token;
}

router.get('/', function (req, res, next) {
    res.render('login')

})

router.get('/register', function (req, res, next) {
    res.render('register');
})

router.put('/update', function (req, res, next) {
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
            console.log('what comes in function')
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
    var newUser = new UserModel();
    if (req.body.name)
        newUser.name = req.body.name;
    if (req.body.email)
        newUser.email = req.body.email;
    if (req.body.date)
        newUser.date = new date(req.body.date);
    if (req.body.address)
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
    // newUser.createdAt = new date();

    newUser.save(function (err, done) {
        if (err) {
            return next(err);
        }
        res.status(200).json(done);
    })
})

module.exports = router;