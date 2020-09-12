var productModel = require('./../model/products.model');
var helper = require('./../helper/helper')

function get(condition) {
    return new Promise(function (resolve, next) {
        productModel.find(condition, function (err, product) {
            if (err) {
                reject(err)
            }
            if (product) {
                resolve(product)
            }
        })
    })
}

function getById(searchCondition) {
    return new Promise(function (resolve, reject) {
        productModel.findById(searchCondition)
            .exec(function (err, product) {
                if (err) {
                    reject(err)
                }
                if (product) {
                    resolve(product)
                }
            })

    })
}
function insert(obj) {
    return new Promise(function (resolve, reject) {
        var newProduct = new productModel({});
        var mappedProduct = helper(newProduct, obj)
        mappedProduct.save(function (err, done) {
            if (err) {
                reject(err)
            }
            resolve(done)
        })
    })
}
function update(id, obj) {
    return new Promise(function (resolve, reject) {
        mapProduct = obj
        productModel.findById(id)
            .exec(function (err, product) {
                if (err) {
                    reject(err)
                } if (product) {
                    var mappedProduct = helper(product, mapProduct)
                    mappedProduct.save(function (err, saved) {
                        if (err) {
                            next(err)
                        }
                        resolve(saved)
                    })
                }
            })
    })
}
function remove(id) {
    return new Promise(function (resolve, reject) {
        productModel.findById(id)
            .exec(function (err, product) {
                if (err) {
                    reject(err)
                }
                product.remove(function (err, done) {
                    if (err) {
                        reject(err)
                    }
                    resolve(product)
                })
            })
    })

}

module.exports = {
    get: get,
    getById: getById,
    insert: insert,
    update: update,
    remove: remove

}