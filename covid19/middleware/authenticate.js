const { jwtSecret } = require("../config/config");
var jwt = require('jsonwebtoken')
var token;
module.exports = function (req, res, next) {
    if (req.headers['token']) {
        token = req.headers['token']
    }
    if (req.headers['authorization']) {
        token = req.headers['authorization']
    }
    if (token) {
       jwt.verify(token,config.jwtSecret,function(err,done){
           if(err){
               console.log('i am at error')
               next(err)
           }
           if(done){
               next()
           }
       })
    } else {
        res.json({
            message: 'token not provided',
            status: 300
        })
    }
}