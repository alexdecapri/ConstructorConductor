//Just like you can add methods to your own constructor, you can also 
//add methods and properties to built in classes in JavaScript like Arrays 
//and Objects.

//Add a reverse method to the String 'class' so that every instance of 
//String can call reverse and reverse itself.
  
String.prototype.reverse = function() {
	return this.split("").reverse().join("");
};

// "String" class is default in JS

// to test: var greeting = "Hello!";
// greeting.reverse();

//this.split takes string and splits characters into an array, then reverse reverses the order of an array