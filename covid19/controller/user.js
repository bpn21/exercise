var express = require('express');
router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var config = require('./../config/config');
var oid = mongodb.ObjectID;
var userModel = require('./../model/user.model')


// router.get('/', function (req, res, next) {
//     res.end('i am form get from user')
// })
router.get('/', function (req, res, next) {
    userModel.find({})
        .sort({
            _id: -1
        }
        )
        .exce(function (err, done) {
            if (err) {
                return err;
            }
            res.status(200).json(done);
        })
    // MongoClient.connect(config.dbUrl, function (err, client) {
    //     if (err) {
    //         console.log('err in connecting', err);
    //     } else {
    //         console.log('success in connecting');
    //         var db = client.db(config.dbName);
    //         db.collection('users').find({}).toArray(function (err, done) {
    //             if (err) {
    //                 return next(err);
    //             }
    //             res.status(200).json(done);
    //         })
    //     }
    // })
})

router.get('/:username', function (req, res, next) {
    console.log('i am in get of username')



    // MongoClient.connect(config.dbUrl, function (err, client) {
    //     if (err) {
    //         console.log('error in connecting');
    //     } else {
    //         console.log('success in connection');
    //         var db = client.db(config.dbName);
    //         db.collection('users').find({
    //             username: req.params.username,
    //         }).toArray(function (err, done) {
    //             if (err) {
    //                 return (err);
    //             }
    //             res.status(200).json(done);
    //         })
    //     }
    // })
})
router.get('/:id', function (req, res, next) {
    console.log('i am in get of id')
    MongoClient.connect(config.dbUrl, function (err, client) {
        if (err) {
            console.log('error in connecting');
        } else {
            console.log('success in connecting')
            var db = client.db(config.dbName)
            db.collection('users').find({
                _id: new oid(req.params.id)

            }).toArray(function (err, done) {
                if (err) {
                    return (err)
                }
                res.status(200).json(done);
            })
        }
    })
})



router.put('/:id', function (req, res, next) {
    MongoClient.connect(config.dbUrl, function (err, done) {
        if (err) {
            console.log('error in connecting')
        } else {
            console.log('success in connecting')
            var db = client.db(config.dbNAme);
            db.collention('users').update({
                id: new oid(id)
            },
                {
                    $set: req.body
                }, function (err, done) {
                    if (err) {
                        console.log('err in updating');
                    } else {
                        console.log('success in updating');
                        res.status(200).json(done);
                    }
                })
        }
    })
})

module.exports = router;