a = (string) => {
    var arr = string.split('')
    var temp = [];
    var j = 0;
    console.log(arr.length)
    for (i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i]
        j++;
    }
    var reversed = temp.join('')
    console.log(reversed)
}
a('bipin');

// anonymous function
b = () => { }