var chalk = require('chalk');

function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.die = function() {
	this.isDead = true;
};

Mouse.prototype.sayHi = function() {
	console.log('I am a mouse, my name is ' + chalk.red(this.name));
};

Mouse.prototype.eat = function() {
	console.log('Eating rice...');
};

Mouse.prototype.run = function() {
	console.log('Running...');

Mouse.prototype.sleep = function() {
	console.log('Sleeping...');
};

module.exports = Mouse;
