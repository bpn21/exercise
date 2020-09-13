const productsQuery = require('./../query/products.query');
var productQuery = require('./../query/products.query');
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
    condition._id = req.params.id
    productQuery.getById(condition)
        .then(function (done) {
            res.status(200).json(done)
        })
        .catch(function (err) {
            next(err)
        })
}
function insert(req, res, next) {

    productQuery.insert(req.body,req.file)
        .then(function (done) {
            res.status(200).json(done)
        })
        .catch(function (err) {
            next(err)
        })

}

function update(req, res, next) {
    var id = {}
    id._id = req.params.id
    productQuery.update(id, req.body)
        .then(function (updated) {
            res.status(200).json(updated)
        })
        .catch(function (err, done) {
            next(err)
        })
}

function remove(req, res, next) {
    id = {}
    id._id = req.params.id
    productsQuery.remove(id)
        .then(function (removedProduct) {
            res.status(200).json(removedProduct)
        })
        .catch(function (err) {
            next(err)
        })
}
module.exports = {
    list: list,
    getById: getById,
    insert: insert,
    update: update,
    remove: remove
}