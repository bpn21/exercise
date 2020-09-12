var productCtrl = require('./../controller/products.ctrl');
var express = require('express');
router = express.Router();


router.route('/')
    .get(productCtrl.list)
    .post(productCtrl.insert)
router.route('/:id')
    .get(productCtrl.getById)
    .put(productCtrl.update)

module.exports = router;

