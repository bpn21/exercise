var a = 'hello shyam ram said hello to you. ram is a boy. shyam is also a boy. they both are friends '

var split = a.split(' ');
// console.log('after spliting', split);

// console.log('lenggth of a is ', split.length);
// var i = 0;

// split.forEach(function (item) {
//     console.log(++i);
// })

// console.log('elements are :', split)

count = {};
for (i = 0; i < split.length; i++) {
    var item = split[i];
    if (count[item]) {          //refrence ma re
        count[item] = count[item] + 1;
        console.log('')
    } else {
        count[item] = 1;
    }
}

console.log('count is ', count)