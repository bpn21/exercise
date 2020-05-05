var fs = require('fs');

function read(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, 'UTF-8', function (err, done) {
            if (err) {
                reject(err);
            } else {
                resolve(done);
            }
        })
    })

}

module.exports = {
    read: read
}