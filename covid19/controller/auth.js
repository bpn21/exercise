var express = require('express');
router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var config = require('./../config/config')
var UserModel = require('./../model/user.model')
router.get('/', function (req, res, next) {
    res.render('login')
   
})

router.get('/register', function (req, res, next) {
    res.render('register');
})

router.put('/update', function (req, res, next) {
    res.end('i am put from auth')
})
router.post('/', function (req, res, next) {
    console.log('ya po aayo te login: ', req.body)
    mongoClient.connect(config.dbUrl, function (err, client) {
        if (err) {
            console.log('err in connecting ');
        } else {
            console.log('success in connecting');
            var db = client.db(config.dbName);
            db.collection('users').find({
                username: req.body.username,
                password: req.body.password
            }).toArray(function (err, done) {
                if (err) {
                    return next(err);
                }
                res.status(200).json(done);
            })
        }
    })
})

router.post('/login', function (req, res, next) {
    console.log('login data is here ', req.body)
})

router.post('/register', function (req, res, next) {
    console.log('register data is here ', req.body)
    var newUser = new UserModel();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.address = {

        temporaryAddress: req.body.temporaryAddress,
        permanentAddress: req.body.permanentAddress,
    };
    // newUser.dob = new date(req.body.dob),
    newUser.password = req.body.password;
    newUser.username = req.body.username;
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