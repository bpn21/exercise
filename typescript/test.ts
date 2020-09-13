// This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
// function calculate(age: number) {

// }
// calculate(12)


//interface
// interface is the collection of properties that define object
// string ko s capital lekheni huncha nalekheni huncha

// interface mailDetails {
//     sender: string,
//     to: string,
//     sub: string,
//     message: string,
//     a: string,
//     receiver: string,
//     b: string,
//     c: string
// }
// interface is the collection of properties that define object
// string lai direct string bhana paiyo 
// number lai sedai number bhana paiyo
// datatype object declaration garna paryo bhaney interface ko help lina paryo

// let abc : mailDetails garna ni paiyo
// let abc : mailDetails;
// abc = {
//     sender: 'jalskjd',
// }

// function sendMail(details: mailDetails) {
//     let obj = {
//         from: details.sender,
//         to: details.receiver,
//         sub: details.sub,
//         message: details.message,
//         something: details.a,
//         anything: details.b

//     }
// }



// Array
// let hobbies: string[]
// let hobbies1: Array<number>


// 
// let a: any
// a = 'sjdfklsj',
//     a = 2039,
//     a = true,


//     function calculate(a: any) {

//     }


// conditional
// same as of javaScript like if else switch

// operator
// same as of javaSCript

// loop
// for -of loop in es6

// ******************************************IMPORTANT PART**************************************8
// class based oop
// fucntional constructor
// new keyword garda functional construcor call hunteo
// constructor ma kai add garna paryo bhaney prototype use garinteo


// HAREYK TS FILEMA CLASS HUNCHA HUNCHA





// abstraction
// complex kura hide garera chainey kura matra deykhauneylai abstraction bhanchau

// polymarphism 
// multiple format, abo inputko adharma multiple form huney vayo, class ko function ko.. jsukaiko pani

// inherit
// code reuse,  code multiple choti lekhna garna naparos bhaneyra 

// encaptulation
// data hiding mechaninm using access specifier or we call it visibility levels.
// when access specifier arenot specified, members will be private automatically but incase of typescript members will be public automatically

// class Fruits {
//     public origin: string = 'Nepal'
//     constructor() {

//     }
//     public getOrigin() {
//         this.color()
//     }
//     public setOrigin() {

//     }
//     private color() {

//     }
//     protected sayHello() {

//     }
//     protected hi() {

//     }
// }

// var apple = new Fruits();
// apple.getOrigin
// apple.setOrigin
// console.log(typeof (apple))

//private and protected kura instance le kaile pani chalainan paidaina


// ABO KALEY CHAI CHALAINA PAUCHA ?
// private kura within the same class matra chalauna paiencha
// 

// this
// this is a object of that particular class and the methods inside class are property,so properties are ... getOrigin(), setOrigin(), color(), sayHello(),hi().. so we do this.getOrigin(),this.setOrigin(), this.sayHello(), this.hi(). so this is the object of that particalar class. :)

// abo protected chai kina banako hola ?
// protected bujnako lagi suruma hamile bujnu parcha inheritance
