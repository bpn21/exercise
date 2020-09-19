

songs = [
    {
        name: 'one',
        time: '12m3s'
    },
    {
        name: 'two',
        time: '3m7s',
    },
    {
        name: 'three',
        time: '4m2s'
    },
    {
        name: 'four',
        time: '3m5s'
    }
]
songs.forEach(function (item) {
    console.log('song ' + item.name, calculateTime(item.time))
})

function calculateTime(arg) {
    // console.log('what comes in time: ', time);
    var time = arg.split('m');
    var min = time;
    var sec = time[1].split('s');
    return {
        minute: min[0],
        second: sec[0],
    }
}

calculateTime('2m33s');
calculateTime('2m44s');
calculateTime('3m44s');
calculateTime('4m44s');
calculateTime('5m44s');
calculateTime('6m44s');
