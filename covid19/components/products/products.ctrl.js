var productQuery = require('./products.query');
console.log('i am here controller outside')

function list(req, res, next) {
    var condition = {}
    if (req.loggedInUser.role !== 1) {
        condition.user = req.loggedInUser.id
    }
    productQuery.get(condition)
        .then(function (data) {
            res.json({ data })
        })
        .catch(function (err) {
            next(err)
        })
}
function getById(req, res, next) {
    var condition = {}
    if (req.loggedInUser.role == 1) {
        condition.user = req.loggedInUser.id
    }
    productQuery.getById(condition)
        .then(function (done) {
            next();
        })
        .catch(function (err) {
            next(err)
        })
}

module.exports = {
    list: list,
    getById: getById
}