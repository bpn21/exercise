
var express = require('express');
var app = express();
var authRout = require('./controller/auth');
var userRout = require('./controller/user');
var productRout = require('./controller/product');
var morgan = require('morgan');
var authenticate = require('./middleware/authenticate');
var authorize = require('./middleware/authorize');
var config = require('./config/config');
require('./db');

pug = require('pug');
app.set('view engine', 'pug');
app.set('views', 'views');

// to know the backend programmer what req url is , .... log herna ko lagi
app.use(morgan('dev'));

// data adan paradan/
// inbuilt middleware of express itselt for body parser
// true is for nested req object. but req kaileni nested ma audaina teini rakhdeyko

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// routing level middleware
app.use('/auth', authRout);
app.use('/user', authenticate, authorize, userRout)
app.use('/product', productRout)

// frontend lai k ma chayo message ? key ?
// key as message or result? so this is helpful
app.use(function (err, req, next) {
    next({
        message: 'Not Found ',
        status: '404'
    })
})
// error handling middleware
app.use(function (err, req, res, next) {
    console.log('i m in error handelling middleware')
    res.status(err.message || 400)
    res.json({
        result: res.message || err,
        status: res.status || 400
    })
})

app.listen(config.port, function (err, done) {
    if (err) {
        console.log('error in listining' + err);
    } else
        console.log('success in listining');
})
