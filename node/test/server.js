var http = require('http')
var wFile = require('./write.js')
var rFile = require('./read')
var renameFile = require('./rename.js')
var removeFile = require('./delete.js')
    ;/* easari nodejsko module haru.. 
node_module ko kura haru import garda kheri path dinu pardaina*/
// Browser le support garney bhaneko http protocol.

server = http.createServer(function (req, res) {
    console.log('client connected to server')
    console.log('what comes in request', req.url);
    // req or 1st argument is http request object
    // res or 2nd argument is a http res   ponse object
    // res.end('hello from server')
    var url = req.url;
    var breakUrl = url.split('/');
    var action = breakUrl[1];
    var fileName = breakUrl[2]
    var content = breakUrl[3];

    if (action == 'write') {

        console.log('what comes in action ', action)
        wFile.write(fileName, content, function (err, done) {
            if (err) {
                res.end('error in writing a file', err)
            } else {
                res.end('success in writing a file', done)
            }
        })
    }
    oldName = breakUrl[2];
    newName = breakUrl[3];
    if (action == 'rename') {

        renameFile.rename(oldName, newName, function (err, done) {
            if (err) {
                res.end('Error in renaming ' + err)
            } else
                res.end('Success in renaming' + done)
        })
    }

    if (action == 'read') {
         rFile.read(fileName)
            .then(function (data) {
                res.end('reading success' + data);
            })
            .catch(function (data) {
                res.end('reading error' + data);
            })
    }

    if (action == 'remove') {
        removeFile.remove(breakUrl[2])
            .then(function (data) {
                res.end('success in deleteing', data)
            })
            .catch(function (data) {
                res.end('failure in deleting' + data)
            })
    }
}).listen(8000, function (err, done) {
    if (err) {
        console.log('server listining failed', err)
    } else {
        console.log('server listining at port 4000 << inside', done)
    }
});

//  http le communication ko  lagi duetw kura khojcha jauile pani
// eauta host, host bhaneko hamro lagi domain name : aileko lagi localhost
//domin name le p address lincha.. facebookko afno domain name huncha
// youtubeko affno huncha
// local host  ko ip addres 127.0.0.1