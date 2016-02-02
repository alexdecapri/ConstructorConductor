//Create a Person constructor that accepts name and age as parameters and 
//sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
};


//Now create three instances of Person with data you make up

var friend1 = new Person("john", 21);
var friend2 = new Person("cynthia", 25);
var friend3 = new Person("hannah", 23);


//Now add a sayName method on your Person class that will alert the 
//name of whatever Person instance called it.

Person.sayName() {
	alert(this.name);
}

//how do I add this into the Person constructor???
