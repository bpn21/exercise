// application leve; middleware
checkToken = function (req, res, next) {
    // res.end('i am blocked from middleware');
    console.log('checking token')
    if (req.headers.token == 1) {
        next();
    } else {
        next();
        // res.end('you dont have access')
    }
}

module.exports = checkToken;