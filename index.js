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