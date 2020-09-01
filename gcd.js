function gcd(num1, num2) {
    while (num1 !== num2) {
        if (num1 > num2) {
            num1 = num1 - num2
        } else {
           num2 = num2 - num1
        }
    }
    return num1;
}

console.log("gretest common factor is :", gcd(6, 12))

/**********************************************************/
// OPTIMIZED PROGRAM 

// var rem;
// var gcd = function (num1, num2) {
//     while (rem != 0) {
//         rem = num1 % num2;
//         num1 = num2
//         num2 = rem
//     }
//     return num1;
// }
// console.log("gcd is ", gcd(116, 112))