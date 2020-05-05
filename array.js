var vegitables = [
    'potato',
    'pumpkin',
    'carrot',
    'cabbage',
    'brinjle',
    'cauliflower',
    'potato',
    'pumpkin',
    'carrot',
    'cabbage',
    'brinjle',
    'cauliflower',
    'potato',
    'pumpkin',
    'carrot',
    'cabbage',
    'brinjle',
    'cauliflower',
];

adding item to an array
at first
vegitables.unshift('bipin');
console.log(vegitables);

// at last
vegitables.push('carrot');
vegitables.push('brinjle');
vegitables.push('carrot');
vegitables.push('brinjle')
console.log(vegitables)


var a = vegitables.indexOf('carrot')
console.log('index of carrot is :', a)

// last item ??
console.log(vegitables);
console.log('last item is : ', vegitables[vegitables.length -1]);
console.log(vegitables.lastIndexOf('brinjle'));

var uniqueArray = [];
for (i = 0; i < vegitables.length; i++) {
    var item = vegitables[i];
    if (uniqueArray.indexOf(item) == -1) {
        uniqueArray.push(vegitables[i]);
    }
}
console.log('unique array is : ', uniqueArray);


var uniqueArray = [];
var count = 0;
for (i = 0; i < vegitables.length; i++) {
    var item = vegitables[i];
    if (uniqueArray.indexOf(item) == -1) {
        uniqueArray.push(vegitables[i]);
        count++;
    }
}
console.log('total vegitables :', count);
