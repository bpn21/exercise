var http = require('http');
var wfile = require('./write');
var server = http.createServer(function (req, res) {
    console.log('what comes in req', req.url);
    res.end('connected to server');
    if (req, url == './write') {
        wfile.write('test.txt', 'this is test file')
    }

})

server.listen(8000, function (err, done) {
    if (err) {
        console.log('error in listining', err)
    } else
        console.log('success in listining', done)
});