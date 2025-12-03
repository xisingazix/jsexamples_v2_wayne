// a)Create a person Object
const person = { name: "John"};
console.log(person);

// b) Create object , Caps for first Letter of object name, it can work with uncap but is not good practice.
function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

//instantiating new Person objects
const person1 = new Person("John", "Doe");
const person2 = new Person("Steve", "Smith");

console.log(person1); 
console.log(person2);

// c) Add a new property to a Person constructor function
Person.prototype.gender = "Male";   // use .prototype. on the Object ( Person ) to declare new property
Person.prototype.membership = "Basic"   // when new property is declared , everyone inherits the same properties

// What is the outcome when I print out person1 and person2?(Everyone will inherit the gender : "Male")
console.log(person1.gender); // Male
console.log(person2.gender); // Male

//Change Person2 Membership to Premium
person2.membership = "Premium"
console.log(person1.firstName, person1.lastName, person1.membership )
console.log(person2.firstName, person2.lastName, person2.membership )

// d) Introduce a new method to Person
Person.prototype.getFullName = function(){
    return `Member: ${this.firstName} ${this.lastName}`;
}
Person.prototype.getMembership = () => {
    return `Type: ${this.membership}`;
}

console.log(person1.getFullName() + " " + person1.membership)
console.log(person2.getFullName() + " " + person2.membership)