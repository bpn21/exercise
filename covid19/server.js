
var express = require('express');
var app = express();
var authRout = require('./controller/auth');
var userRout = require('./controller/user');
var morgan = require('morgan');
var authenticate = require('./controller/authenticate');
var authorize = require('./controller/authorize');
var config = require('./config/config');
require('./db');
// app.use(express.json);

pug = require('pug');
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}))

// routing level middleware
app.use('/auth', authenticate, authorize, authRout);
// app.use('/', authRout);
app.use('/user', userRout)


app.use(function (req, res, next) {
    next(err);
})
app.use(function (err, req, res, next) {
    console.log('i m in error handelling middleware')
    res.status(err.message || 400)
    res.json({
        status: res.status + 400,
        message: res.message + err
    })
})

app.listen(config.port, function (err, done) {
    if (err) {
        console.log('error in listining' + err);
    } else
        console.log('success in listining');

})