// //Fruits is a functional constructor // easlai object constructor bhane pani eautai kura ho

// // how to know it is a functional constructor
// //1) naming convention - starts with capital letter
// //2) fucntional constructor do not return. // return bhaney keyword nai hundaina
// //3) (important) functional Constructor is always called with keyword NEW.

// // console.log('this is outside', this)
// function Fruits(name, country, price) {
//     // console.log('thi is inside', this);
//     this.name = name;
//     this.origin = country;
//     this.price = 'Rs ' + price;
// }

// var apple = new Fruits('Apple', 'Nepal', 110);
// var mango = new Fruits();
// var orange = new Fruits();
// var papaya = new Fruits();
// var banana = new Fruits();


// console.log(apple)
// console.log(mango);
// console.log(orange);
// console.log(papaya);
// console.log(banana);




function Vegitable(name, origin, price) {
    this.name = name;
    this.origin = origin;
    this.price = price;
}

spanish = new Vegitable('spanish', 'america', 'Rs 50');
kauliflower = new Vegitable();
cabbage = new Vegitable();
ladiesfinger = new Vegitable();
pumpkin = new Vegitable();
bringle = new Vegitable();


//  prototype is keyboard to add property method to fucntional constructor.
Vegitable.prototype.color = 'green'; //here all the vegitables become green ! 
// newly added property.. but value for that property will be same for all the objects
console.log(spanish.color);

Vegitable.prototype.size = function (size) {
    return size;
}
console.log(kauliflower.size('big'));
console.log(spanish);
console.log(kauliflower);
