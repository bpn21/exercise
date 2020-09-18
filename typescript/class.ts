class fruits {
    constructor() {
        let origin = 'Nepal'
        let type = 'Organic'
        console.log('object created :')
        console.log('origin is :', origin)
        console.log('type is :', type)

    }

    name(name: String) {
        console.log(`name of fruit is ${name}`)
    }

    price(name: String, price: Number) {
        console.log(`price of ${name} is ${price}`)

    }
}

const apple = new fruits;
apple.name('apple');
apple.price('apple', 100)
