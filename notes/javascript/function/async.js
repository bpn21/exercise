function laptop(cb){
    console.log('went to shop');
    console.log('shopkeeper insist me to buy a laptop, laptop is only avaliable after two days');
    
    setTimeout(function(){
        console.log('Laptop arrieved at shop');
        cb();
    },4000);
}

function callBack(){
    console.log('cycle is now avaliable');
}

laptop(callBack);