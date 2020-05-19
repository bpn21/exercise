var express = require('express');
var app = express();
var authRout = require('./authRout')

// router.post('/', function (req, res, next) {
// console.log('request is ',req.body)
// })
app.use('/auth',authRout)

app.listen(4000, function (err, done) {
    if (err) {
        return err;
    }
    console.log('success in listining')
})