var productRout = require('./components/products/routes/products.routes')
var express = require('express');
const authenticate = require('./middleware/authenticate');
var router = express.Router();

module.exports = (aunthenticate) => {
    router.use('/products', authenticate, productRout)
    return router
}
