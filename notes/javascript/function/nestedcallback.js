//task part
function getCertificate(course, cb) {
    setTimeout(function () {
        cb(null, 'getting mean stack certificate');
    }, 1000)

}
function applyJob(cb) {
    setTimeout(function () {
        cb(null, 'engineer');
    }, 2000)
}

function asEmployee(performance, cb) {
    setTimeout(function () {
        cb(null, 'getting job after 1 month');
    }, 10000)
}
//execution part

getCertificate('meanstack', function (err, success) {
    if (err) {
        console.log('error in ', err);
    }

    else {
        console.log('success in ', success);

        applyJob(function (err, success) {
            if (err) {
                console.log('error in applying job', err);
            }
            else {
                console.log('success in applying job', success)
            }
            console.log('but you got job as in trainee')

            asEmployee('performance', function (err, success) {
                if (err) {
                    console.log('error in ', err);
                }
                else {
                    console.log('success in  ', success);
                }
            })

        })
    }
})