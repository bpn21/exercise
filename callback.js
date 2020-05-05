// Story for exam prepration

//task part

function callForNote(note, cb) {
    console.log('asked a note for a friend');
    setTimeout(function () {
        cb(note);

    }, 3000)
}

function printNote(note, cb) {
    var electricity = true;
    if (electricity) {
        setTimeout(function () {
            cb(null, note)
        }, 4000)
    }
    else {
        console.log('electricity is not avaliable')
        cb('printing is failed !')
    }
}
//execution part

console.log('prepration for exam');
callForNote('electric circuit and theory', function (note) {
    console.log('got a note from friend after so long');
});

printNote('ect', function (err, success) {
    if (err) {
        console.log('Error in printing', err)
    }
    else {
        console.log('printing is success ', success)

    }
})