var myDog = require('./Dog');
var myCat = require('./cat');

var dog = new myDog('Husky');
var Tom = new myCat();
dog.eat(Tom);
console.log(dog);