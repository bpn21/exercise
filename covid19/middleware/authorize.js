// application level middleware
checkRoute = function (req, res, next) {
    console.log('what comes in req.loggedInUser=',req.loggedInUser)
    if (req.loggedInUser.role == 1) {
        return next();
    } else {
        res.json({
            message: 'you have no permission',
            status: 300
        })
        // res.end('you are not permitted')
    }
}

module.exports = checkRoute;