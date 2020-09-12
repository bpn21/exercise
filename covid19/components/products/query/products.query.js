var productModel = require('./../model/products.model');
var helper = require('./../helper/helper')
function get(condition) {
    console.log('i am at inside query')

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
        var newProduct = new productModel();
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
            .exec(function (err, done) {
                if (err) {
                    reject(err)
                }
                var newProduct = new productModel();
                var mappedProduct = helper(newProduct, mapProduct)
                mappedProduct.save(function (err, saved) {
                    if (err) {
                        next(err)
                    }
                    resolve(saved)
                })

            })

    })
}
// function remove(id, condition) {
//     return new Promise(function (resolve, reject) {

//         productModel.findById(condition)
//             .exec(function (err, done) {
//                 if (err) {
//                     reject(err)
//                 }
//                 var newProduct = new productModel();
//                 var mappedProduct = helper(newProduct, mapProduct)
//                 mappedProduct.save(function (err, saved) {
//                     if (err) {
//                         next(err)
//                     }
//                     resolve(saved)
//                 })

//             })

//     })
// }

module.exports = {
    get: get,
    getById: getById,
    insert: insert,
    update: update,

}