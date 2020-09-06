var express = require('express');
var multer = require('multer')
router = express.Router();
var productModel = require('./../model/productModel');
var mapData = require('./../mapData/mapData')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files/image')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var upload = multer({ storage: storage })

router.get('/', function (req, res, next) {
    productModel.find({})
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
    console.log('what comes in file ', req.file)
    console.log('register data is here ', req.body)
    var newProduct = new productModel();
    var mappedProduct = mapData.product(newProduct, req.body)
    if (req.file) {
        mappedProduct.image = req.file.filename
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