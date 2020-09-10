var productModel = require('./products.model');
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
            .exec(function (err, done) {
                if (err) {
                    reject(err)
                }
                if (product) {
                    resolve
                }
            })

    })
}

module.exports = {
    get: get,
    getById: getById
}