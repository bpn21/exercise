var fs = require('fs');

function rename(oldNamre, newName, cb)
fs.renameFile(oldName, newName, function (err, done) {
    if (err) {
        res.end('renaming error')
    }
    res.end('renaming success', done);
})


module.expert = {
    rename: rename
}