var chalk = require('chalk');

function Cat(name) {
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse); 
}

Cat.prototype.sayHi = function() {
	console.log('I am a cat, my name is ' + chalk.blue(this.name));
};

module.exports = Cat;
