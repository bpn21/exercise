var express = require('express');
router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var config = require('./../config/config');
var oid = mongodb.ObjectID;
var UserModel = require('./../model/user.model')

router.get('/', function (req, res, next) {
    UserModel.find({})
        .sort({
            _id: -1
        }
        )
        .exec(function (err, done) {
            if (err) {
                return next(err);
            }
            res.status(200).json(done);
        })
})
router.post('/', function (req, res, next) {
    UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    }, function (err, user) {
        if (err) {
            next(err)
        }
        if (user) {
            var token = jwt.sign({
                username: username,
                id: user._id
            }, 'kjdkaksjlkjlklkj')
            res.status(200).json({
                user: user,
                token: token
            })
        }
        else {
            next({
                message: 'user not found',
                status: '404'
            })
        }
    })
})


router.get('/:id', function (req, res, next) {
    console.log('i am in get of id');

    UserModel.findById({ _id: req.params.id })
        .exec(function (err, user) {
            if (err) {
                return next(err);
            }
            res.status(200).json(user);
        })

})



router.put('/:id', function (req, res, next) {

    UserModel.findById(req.params.id)
        .exec(function (err, user) {
            if (err) {
                return next(err)
            }
            // res.status(200).json(user);

            if (req.body.name)
                user.name = req.body.name
            if (req.body.username)
                user.username = req.body.username
            if (req.body.email)
                user.email = req.body.email
            if (req.body.date)
                user.date = new date(req.body.date);
            if (req.body.address)
                user.address = {

                    temporaryAddress: req.body.temporaryAddress,
                    permanentAddress: req.body.permanentAddress,
                };
            // newUser.dob = new date(req.body.dob),
            if (req.body.password)
                user.password = req.body.password;
            if (req.body.username)
                user.username = req.body.username;
            if (req.body.gender)
                user.gender = req.body.gender;
            user.save(function (err, user) {
                if (err) {
                    return next(err);
                }
                res.status(200).json(user)
            })
        })
})

router.delete('/:id', function (req, res, next) {
    UserModel.findById(req.params.id)
        .exec(function (err, user) {
            if (err) {
                next(err)
            }
            if (user) {
                user.remove(user)
            } else {
                next({
                    message: 'error not found',
                    status: 404
                })
            }
        })
})

module.exports = router;