var productCtrl = require('./../controller/products.ctrl');
var express = require('express');
router = express.Router();
var upload = require('./../../thirdparty/multer')
router.route('/')
    .get(productCtrl.list)
    .post(upload.single('image'), productCtrl.insert)
router.route('/:id')
    .get(productCtrl.getById)
    .put(productCtrl.update)
    .delete(productCtrl.remove)

module.exports = router;

