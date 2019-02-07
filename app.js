// Making objects with the methods inside.
// let person1 = {
//    name: 'Joel',
//     sayHello: function () {
//         console.log(`Hello! My name ${this.name}.`)
//     }
// }

// let person2 = {
//     name: 'Lauren',
//     sayHello: function () {
//         console.log(`Hello! My name ${this.name}.`)
//     }
// }

// let person3 = {
//     name: 'Josh',
//     sayHello: function () {
//         console.log(`Hello! My name ${this.name}.`)
//     }
// }

// let person4 = {
//     name: 'Nathan',
//     sayHello: function () {
//         console.log(`Hello! My name ${this.name}.`)
//     }
// }

// let person5 = {
//     name: 'Stone',
//     sayHello: function () {
//         console.log(`Hello! My name ${this.name}.`)
//     }
// }
// Calling the Objects with their Methods.
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// // Creating the same Objects us Psuedo Classes.
// function Person(name,city,age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// };

// Person.prototype.greet = function () {
//     alert('Hello, my name is ' + this.name + '. I am ' + this.age + ' and I live in ' + this.city + '!');
// };

// let p1 = new Person ('Joel','a van','25');
// let p2 = new Person ('Josh','Birmingham','25');
// let p3 = new Person ('Nate','Gadsden','24');
// let p4 = new Person ('Stone','Gadsden','23');
// let p5 = new Person ('Lauren','Gadsden','25');

// p1.greet();
// p2.greet();
// p3.greet();
// p4.greet();
// p5.greet();

// class Person {
//     constructor(name,age,city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     }
//     hello() {
//         alert(`Hello, my name is ${this.name}. I am ${this.age} and I live in ${this.city}!`)
//     }
// };

// let friend1 = new Person ('Joel','25','a van');
// let friend2 = new Person ('Josh','25','Birmngham');
// let friend3 = new Person ('Nate','24','Birmingham');
// let friend4 = new Person ('Stone','24','Gadsden');
// let friend5 = new Person ('Lauren','25','Gadsden')

// friend1.hello();
// friend2.hello();
// friend3.hello();
// friend4.hello();
// friend5.hello();

class Vehicle {
    constructor (Man,NOW,Prop) {
        this.Man = Man;
        this.NOW = NOW;
        this.Prop = Prop;
    }
    aboutVehicle() {
        console.log(`Type = ${this.Prop}, Manufacturer = ${this.Man}, Number of Wheels = ${this.NOW}`)
    }
};

class Truck extends Vehicle {
    constructor(Man,NOW,Prop,NOD,TB) {
        super(Man,NOW,Prop);
        this.NOD = NOD;
        this.TB = TB;
    }
    TruckBed () {
        if(TB === 'yes'){
            console.log('True');
        } else { 
            console.log('False');
        };
    };
    aboutTruck() {
        console.log(`Type = ${this.Prop}, Manufacturer = ${this.Man}, Number of Wheels = ${this.NOW}, Number of Doors = ${this.NOD}, Truckbed = ${this.TB}`)
    }
};

class Sedan extends Vehicle {
    constructor(Man,NOW,Prop,mpg,size) {
        super(Man,NOW,Prop);
        this.mpg = mpg;
        this.size = size;
    }
    aboutSedan() {
        console.log(`Type = ${this.Prop}, Manufacturer = ${this.Man}, Number of Wheels = ${this.NOW}, MPG = ${this.mpg}, Size = ${this.size}`)
    };
};

class Motorcycle extends Vehicle {
    constructor(Man,NOW,Prop,HandBars,NOD) {
        super(Man,NOW,Prop);
        this.HandBars = HandBars;
        this.NOD = NOD;
    }
    aboutMotorcycle() {
        console.log(`Type = ${this.Prop}, Manufacturer = ${this.Man}, Number of Wheels = ${this.NOW}, Steering = ${this.HandBars}, Number of Doors = ${this.NOD}`)
    };
};

let JoelsVan = new Truck('Chevy','4','G20','6','no');
JoelsVan.aboutTruck();

let LaurensCar = new Sedan('Toyoto','4','Corrola','30mpg','Small');
LaurensCar.aboutSedan();

let NatesBike = new Motorcycle ('Triumph','2','Scrambler','HandleBars','0');
NatesBike.aboutMotorcycle();
