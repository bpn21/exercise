var fs = require('fs');

function rename(oldName, newName, cb) {
    console.log('what comes in cb ', cb);
    fs.rename(oldName, newName, function (err, done) {
        if (err) {
            cb(err)
        } else {
            cb(null, done)
        }
    })
}

module.exports = {
    rename: rename
}