var productCtrl = require('./products.ctrl');
var express = require('express');
router = express.Router();


router.route('/')
    .get(productCtrl.list)

module.exports = router;

