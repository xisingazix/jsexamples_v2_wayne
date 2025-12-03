import Vehicle from "./Vehicle.js"
//const Vehicle = require("./Vehicle.js");
//Create a child class (Car) from Vehicle class

class Car extends Vehicle{  //INHERITS the vehicle class

    //constructor
    constructor(make, model, year){
        super(make, model, year);   // super (keyword) -refers to parent class
        this.airbag = true;         // property airbag is unique to cars    
    }

    // a static method of a class can be used without Instantiation
    static welcomeSatement(msg){
        console.log(msg);
    }

    // Polymorphism (Override and specialising the parent method)
    drive(distance){
        super.travel(distance);     //Abstaction -drive method hides the implementation (travel)
        console.log(`Driving complete. Status: ${this.airbag ? 'Safety Check Passed.': 'Airbag absent'}`);
    }
    //checkSafetyFeature() is only found in Car Class
    checkSafetyFeature(){
        return this.airbag;
    }
    //Implicit Inheritance methods inherited here Car Class (from Vehicle) 
    //  travel()    
    //  getTotalDistance() - Abstraction, Where we do not see the implementation of getTotalDistance(), yet we can invoke it
    //  distanceTraveled - Encapsulation, Where the state of the property is managed by the parent class
    
}
Car.welcomeSatement("\n******\nWelcome Car Owner.\n******\n");

// Instantiate a new instance of a car
const myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(100);
myNewCar.drive(100);
console.log(`Does my new car have safety features: ${myNewCar.checkSafetyFeature()}`)
console.log(`My new car has travelled : ${myNewCar.getTotalDistance()} km.`)


//module.exports = Car;
export default Car; // Car needs to use ES6+ as well