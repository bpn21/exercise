var express = require('express');
router = express.Router();
var productModel = require('./../model/productModel');

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
router.post('/', function (req, res, next) {
    console.log('what comes in product post request :', req.body);
    var newProduct = new productModel();
    if (req.body.name)
        newProduct.name = req.body.name
    if (req.body.brand)
        newProduct.brand = req.body.brand
    if (req.body.size)
        newProduct.size = req.body.size
    if (req.body.model)
        newProduct.model = req.body.model
    if (req.body.quality)
        newProduct.quality = req.body.quality
    if (req.body.status)
        newProduct.status = req.body.status
    if (req.body.price)
        newProduct.price = req.body.price
    if (req.body.quantity)
        newProduct.quantity = req.body.quantity

    newProduct.save(function (err, done) {
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