var fs = require('fs');

function remove(fileName) {
    return new Promise(function (resolve, reject) {
        fs.unlink(fileName, function (err, done) {
            if (err) {
                reject(err)
            }
            resolve(done)
        })
    })
}

module.exports = {
    remove: remove
}
