// Story for exam prepration

//task part
function getCertificate() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('congratulation you got a certificate')
        }, 1000)
    })
};
function applyJob() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, 2000)
    })
};

function asEmployee() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('hired job after one month');
        }, 10000)
    })
};

//execution part

var result = getCertificate('meanstack');

result
    .then(function (data) {
        console.log('success recieved from promise', data)
        console.log('got certificate')

        return applyJob;
    })
    .then(function (){
        console.log('congratulation , you  have been selected for tranee');
        return asEmployee();
    })
    .then(function (){
        console.log('congratulation you have been selected and an employe after 1 month')
    })
    .catch(function (err) {
        console.log('error recieved fom promise ', err)
    })