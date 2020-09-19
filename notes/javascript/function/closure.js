var obj = {
    name:'bipin',
    age:24,
    roll:39
}

nextObj= obj
console.log('age is',obj.licenseNo);

obj.licenseNo = '123456';
console.log('age of '+ obj.name + ' is ',obj.age,'and roll number is ',obj.roll);
console.log('Lisense no of '+ obj.name+ ' is',obj.licenseNo);

obj.mother = 'sita gaire';
console.log('mother of',obj.name,'is',obj.mother);

obj.identity = 'engineer';
console.log('identity of ', obj.name, 'is ', obj.identity);