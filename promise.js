// promise is an object which HOLDS future value of failure of success.

//     syantax
// new Promise(function (success, failure) {
// })

//NOTE : OBJECT BHITRA KO FUNCTION LAI METHOD BHANCHA  !
//NOTE : PROMISE KO PANI METHOD CHA. 3 OTA METHOD CHA.
// .THEN 
//. 

//eg :
// var abc = new promise (function (resolve,reject){

// })
// var a = function (data){
// console.log('a is called ',resolve)
// }

// var b = function (){
// console.log('b is called', err)
// }

// abc.then(a,b);

// Promise has three state (4)
// pending state
// onfullfilled
// onrejection
// setteled // once in setteled state it wont change its state

// promise object has three methods 
// then method is used to handle both succes and failure value of Promise
// catch method is used to handle failure value only
// finnally method is used to track setteled

function getCertificate() {
    return new promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('hi');
        }, 1000)
    })
}

getCertificate()
    .then(function (data) {
        console.log('in success state', data)
    })
    .catch(function (err) {
        console.log('in error state ', err)
    })