var myDog = require('./Dog');
var myCat = require('./cat');
var myMouse = require('./mouse.js');

var dog = new myDog('Husky');
var cat = new myCat('Tom');
var mouse = new myMouse('Jerry');
// dog.eat(cat);
// console.log(dog);
cat.sayHi();
mouse.sayHi();
// cat.eat(mouse);
try {
	cat.eat(dog);
}
catch(error) {
	console.log('Error while cat eating a dog');
}

console.log(cat);