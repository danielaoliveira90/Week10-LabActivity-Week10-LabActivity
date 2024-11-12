// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h


const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
  
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`Accelerate pedal was pressed! ${this.make} is going at ${this.speed} km/h.`);
  };
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`Brake pedal was pressed!${this.make} is going at ${this.speed} km/h.`);
  };
  
  const bmw = new Car('BMW', 120);
  const mercedes = new Car('Mercedes', 95);
  
  bmw.accelerate();
  bmw.brake();
  bmw.accelerate();
  bmw.accelerate();
  bmw.brake();
  mercedes.accelerate();
  mercedes.accelerate();
  mercedes.accelerate();
  mercedes.accelerate();
  mercedes.brake();
  mercedes.brake();

//   Challenge 2

class CarCL {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Converts current speed in mi/h
    get speedUS() {
      return (this.speed / 1.6);
    }
  }
  
  const carFord = new CarCL('Ford', 120);
  console.log(carFord);
  console.log(carFord.speedUS);

//   Challenge 3

// Electric Car Constructor Function
const EV = function(make, speed, charge) {
    Car.call(this, make, speed); // Inherit make and speed properties from Car
    this.charge = charge; // Additional property for EV
};

// Link EV prototype to Car prototype to inherit its methods
EV.prototype = Object.create(Car.prototype);

// Implement chargeBattery method
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%.`);
};

// Override accelerate method for EV
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%.`);
};

// Test Data: Tesla going at 120 km/h with a charge of 23%
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();     
tesla.brake();          
tesla.chargeBattery(90); 
tesla.accelerate();    
