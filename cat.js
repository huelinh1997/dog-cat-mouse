var chalk = require('chalk');
var mouse = require('./mouse');

function Cat(name) {
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	if( animal instanceof mouse) {
		this.stomach.push(animal); 
	}
	else {
		throw new Error ('Cat can only eat mouse');
	}
}

Cat.prototype.sayHi = function() {
	console.log('I am a cat, my name is ' + chalk.blue(this.name));
};

module.exports = Cat;
