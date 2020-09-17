// USE OF HIGHER ORDER FUNCTION

var productModel = require('./../model/products.model');
var helper = require('./../helper/helper')
var fs = require('fs')

function get(condition) {
    return new Promise(function (resolve, reject) {
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
                reject({
                    message: 'product not found',
                    status: '404'
                })
            })

    })
}
function insert(obj, file) {

    return new Promise(function (resolve, reject) {
        var newProduct = new productModel({});
        var mappedProduct = helper(newProduct, obj)
        if (file) {
            var originalname = file.originalname;
            var arr = originalname.split('.');
            var extension = arr[arr.length - 1];
            if (extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'jpg') {
                mappedProduct.image = file.filename
            } else {
                fs.unlink('./files/image/' + fileName, function (err) {

                    if (err) {
                        reject(err)
                    }
                    resolve({
                        message: 'Only a file with extension jpeg or png or gif or jpg is uploaded',
                        status: 400
                    })
                    // res.status(200).json({
                    //     message: 'Only a file with extension jpeg or png or gif or jpg is uploaded',
                    //     status: 400
                    // })
                })

            }
        }
        mappedProduct.save(function (err, saved) {
            if (err) {
                reject(err)
            }
            if (done) {
                resolve(saved)
            }
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
                reject({
                    message: 'product not found',
                    status: '404'
                })
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