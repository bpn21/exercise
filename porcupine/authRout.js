var express = require('express');
var router = express.Router();

router.post('./', function (err, res, next) {
    console.log('request is ', res.body)
})