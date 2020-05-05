// STRING

// var text = 'My Name is Bipin Gaire';
// var upperCase = text.toUpperCase();
// console.log(upperCase);
// console.log(text.toLowerCase()); 
// console.log(text.length) // INBUILT PROPERTY .. !!! NOT INBUILT METTHOD

// console.log(text.trim());


/* TYPE CONVERSION
CONVERTS STING INTO ARRAY */

// console.log(text.split(' '));
// console.log(text.slice(5));

/* NUMBER */

// var num = 999.9990

// console.log(num.toFixed(3));
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(Number("num")); // NaN = NOT A NUMBER



/* OBJECT */

var student = {
    name: 'bipin',
    age : 24,
    rollNo: 9032,
    level : 'bachlelor',
    programe: 'Electronics and communication'
}

/* KUNAI PANI OBJECT MA TEO PROPERTY CHA KI CHAIN 
BHANEYRA PATA LAGAUNA KAM LAGCHA */
/*TRUE OR FALSE */

console.log(student.hasOwnProperty('name'));

console.log(student.hasOwnProperty('hkjhj'));


/* condition lagayera ni garn sakinch GUYS */

if('name' in student){
    console.log('TRUE');
}else
{
    console.log('FALSE');
}

/* In a pair JSON.stringyfy JSON.parse
OBJECT LAI STRING MA CONVERT GARNA PARYO BHANEY.. STRINGIFY..
OBJECT AS STRING BHAYO
NOW,
STRING LAI FERI REVERSE GARNA PARYO  BHANEY PARSE GARNA .. 
OBJECT MA PARSE GARNA PARCHA YEDI OBJECT IS IN STRING 

SO,
OBJECT AS A STRING AYO BHANEY... JSON.PARSE  USE HUNCHA


STRINGIFY AND PARSE PAIR MA AAUCHA !!! */

var stringify = JSON.stringify(student);
console.log('stringyfy >>',stringify);
console.log('parsed result>>',JSON.parse(stringify))





/* LOOP IN JAVA SCRIPT */

/*enemeurated properties
for in      //(j jati countable huncha sabai lai lagauna paeyo)array ko lagi lagauna ni payeyo, object ko lagi lagauna ni payiyo
for each    // array ko lagi matra
map         // array ko lagi matra
filter      //array ko lagi matra
reduce      //array ko lagi matra
for of 
some
find
every


