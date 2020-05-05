var fs = require('fs')


function writeFile(filename, content, cb) {
    // console.log('what comes in cb', cb);
    fs.writeFile(filename, content, function (err, done) {
        if (err) {
            cb(err)
            console.log('writing error')
        } else
            cb(done)
        console.log('writing success')
    })

}

module.exports = {
    write: writeFile
}