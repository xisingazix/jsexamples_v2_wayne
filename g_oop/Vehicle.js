//Create a class called Vehicle (Parent Class)
class Vehicle{
    
    //constructor(keyword) - only allow one constructor, cant do overload method like in java
    //this (keyword)
    //a constructor is called when a new instance of class is created
    constructor(make, model, year, distanceTraveled){
        this.make = make;
        this.model = model;
        this.year = year;
        this.distanceTraveled = distanceTraveled ? distanceTraveled : 0;  //default value for all new instance
    }
    // method common to all vehicles
    travel(distance){
        this.distanceTraveled += distance; // cumulatively add distance passed in +=
        console.log(`This ${this.year} ${this.make} ${this.model} has been driven ${distance}units(km).`)
    }

    //method to get the total distance travelled
    getTotalDistance(){
        return this.distanceTraveled;
    }
}

// Missing property value will show as undefine for javascript, other language will not allow instance to be created
// const myTransport = new Vehicle("Toyota", "Raize", "2022");    
// myTransport.travel(100);    //first day distance , using method travel to increase distanceTraveled value
// myTransport.travel(50);     //second day distance, cummulative

// console.log(`My transport has travelled a  total of ${myTransport.getTotalDistance()} km.`); // using getTotalDistance to pull up current distanceTravelled value of 

const myTransport2 = new Vehicle("Honda", "Vezel", "2013", 50);     
//myTransport2.travel(20);    
//myTransport2.travel(50);    
console.log(myTransport2.distanceTraveled)

// console.log(`My second transport has travelled a  total of ${myTransport2.getTotalDistance()} km.`); 

// console.log(myTransport.make);  // checking make property of myTransport

//module.exports = Vehicle; // class Vehicle is exported.
export default Vehicle; // Moder ES6+ Approach to exporting