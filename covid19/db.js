mongoose = require('mongoose');
config = require('./config/config')
mongoose.connect(config.dbUrl, function (err, done) {
    if (err) {
        console.log('database connection failed')
    } else {
        console.log('database connection establised')
    }
})