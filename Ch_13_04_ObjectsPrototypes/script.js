//"use strict"

// Simple prototype example

// Creating special-function/ fake-class
// even 'player(n, a, h) will also work, so initial uppercase letter is just a convention
function Player(n, a, h) {
    this.name = n;
    this.age = a;
    this.height = h;
}


// adding methods to class
Player.prototype.info = function(){
	console.log("Name: ", this.name, ", Age: ", this.age, ", Height: ", this.height);
};

Player.prototype.birthday = function(){
	this.age++;
	console.log("Age: ", this.age);
};


var fred = new Player("Fred", 12, 112);
var john = new Player("Jogn", 23, 123);

fred.info();
fred.birthday();
john.info();
john.birthday();


// Testing
// Adding personal property and methods
fred.weight = 101;
john.sing = function() {
	console.log('Tera mujhse hai pehle ka naataa koi');
};

// Should work fine
console.log(fred.weight);
john.sing();

// Following should show bad behaviour
console.log(john.weight);  	// undefined
fred.sing();			// fred.sing() is not a function

