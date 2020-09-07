var authorize = require('./../middleware/authorize')
var fileName = '';
var fs = require('fs')
var express = require('express');
var multer = require('multer')
router = express.Router();
var productModel = require('./../model/productModel');
var mapData = require('./../mapData/mapData');
const { runInNewContext } = require('vm');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files/image')
    },
    filename: function (req, file, cb) {
        fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
    }
})
var upload = multer({ storage: storage })

router.get('/', function (req, res, next) {
    var condition = {};
    if (req.loggedInUser.role != 1) {
        condition.user = req.loggedInUser.id
    }
    productModel.find({user:'5f5608e0ed3d52149c4c69c5'})
        .exec(function (err, product) {
            if (err) {
                return next(err);
            }
            res.status(200).json(product)

        })
})

router.get('/:id', function (req, res, next) {
    var id = req.params.id
    productModel.findById(id)
        .exec(function (err, product) {
            if (err) {
                return next(err);
            }
            res.status(200).json(product)

        })
})


router.post('/', upload.single('image'), function (req, res, next) {
    var newProduct = new productModel();
    var mappedProduct = mapData.product(newProduct, req.body)
    mappedProduct.user = req.loggedInUser.id
    if (req.file) {
        var originalname = req.file.originalname;
        var arr = originalname.split('.');
        var extension = arr[arr.length - 1];
        if (extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'jpg') {
            mappedProduct.image = req.file.filename
        } else {
            console.log('filename :', fileName)
            fs.unlink('./files/image/' + fileName, function (err) {

                if (err) {
                    return next(err)
                }
                res.status(200).json({
                    message: 'Only a file with extension jpeg or png or gif or jpg is uploaded',
                    status: 400
                })
            })

        }
    }
    mappedProduct.save(function (err, done) {
        if (err) {
            next(err)
        }
        if (done) {
            res.status(200).json(done)
        }
    })
})


router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log('what comes in id :', id)
    productModel.findById(id)
        .exec(function (err, product) {
            if (err) {
                return next();
            }
            if (product) {
                if (req.body.name)
                    product.name = req.body.name
                if (req.body.brand)
                    product.brand = req.body.brand
                if (req.body.size)
                    product.size = req.body.size
                if (req.body.model)
                    product.model = req.body.model
                if (req.body.quality)
                    product.quality = req.body.quality
                if (req.body.status)
                    product.status = req.body.status
                if (req.body.price)
                    product.price = req.body.price
                if (req.body.quantity)
                    product.quantity = req.body.quantity

                product.save(function (err, done) {
                    if (err) {
                        next(err)
                    }
                    if (done) {
                        res.status(200).json(done)
                    }
                })

            }
        })
})

router.delete('/:id', function (req, res, next) {
})

module.exports = router;