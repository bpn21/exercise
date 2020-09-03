// application level middleware
checkRoute = function (req, res, next) {
    // if (req.headers.role == 1) {
    //     return next();
    // } else {
    //     next();
    //     // res.end('you are not permitted')
    // }
    next();
}

module.exports = checkRoute;