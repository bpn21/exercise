var fruits = /** @class */ (function () {
    function fruits() {
        var origin = 'Nepal';
        var type = 'Organic';
        console.log('object created :');
        console.log('origin is :', origin);
        console.log('type is :', type);
    }
    fruits.prototype.name = function (name) {
        console.log("name of fruit is " + name);
    };
    fruits.prototype.price = function (name, price) {
        console.log("price of " + name + " is " + price);
    };
    return fruits;
})();
var apple = new fruits;
apple.name('apple');
apple.price('apple', 100);