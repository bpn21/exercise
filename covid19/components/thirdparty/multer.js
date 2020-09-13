var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files/image')
    },
    filename: function (req, file, cb) {
        fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
    }
})
var upload = multer({ storage: storage })

module.exports = upload