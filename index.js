class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`My am ${this.name}, I'm a ${this.type}`);
    return "Emmei Emmei Bhai !!!";
  }
}

class Wizard extends Player {
  constructor(name, type, isOld) {
    super(name, type); // super calls the constructor of parent class
    this.isOld = isOld;
  }

  play() {
    console.log(`WEEEE, I am a ${this.type}`);
    console.log(`Am I old? ${this.isOld}`);
  }
}

var wizard1 = new Wizard("Sally", "Healer", false);
console.log(wizard1.introduce());
console.log(wizard1.play());

//  Objects ::

const obj1 = {
  name: "Immi"
};

const obj2 = obj1;
obj1.age = 23;

console.log(obj1);
console.log(obj2);

let a = 5;
let b = a;
b++;
console.log(a);
console.log(b);

// Arrays are basically objects in javascript

const array1 = [12, 24, 23];
const array2 = array1;
array2.push(98);
console.log("Wew are", array1);

// Cloning, Shallow Cloning and Deep Cloning

const obj = {
  a: "a",
  b: "b",
  c: "c"
};

// How to copy.
const clone = Object.assign({}, obj);
clone.d = "d";

console.log(`obj = ${Object.keys(obj)}`);
console.log(`obj = ${Object.keys(clone)}`);

// We can clone an object using "spread operator" in ES6... which is an awesome way forward
const person = {
  name: "Mr Malik",
  age: 28,
  showDetails: function() {
    console.log(`Name is :${this.name}`);
    console.log(`Age is :${this.age}`);
  }
};

person.showDetails();

const clonedPerson = { ...person };

// Note that cloned object is a seperate object having its own reference
clonedPerson.employeeStatus = "working";
console.log(Object.keys(person).length); // 3
console.log(Object.keys(clonedPerson).length); // 4

/*---
  Shallow vs Deep Clone 
  =====================
  >Shallow clone happens only when our keys are non objects.
  >In case of objects within objects, we cannot clone using either Object.assign or using spread operator. We need to do something call JSON.parse(JSON.stringify(obj));
  >Let's see an example:: First for the case of trying to clone
  
---*/

const employee = {
  name: "Sahil",
  age: 28,
  address: {
    street: "Baghat Barzullah !!!",
    house_no: 23
  }
};

/* --- In the below case SHALLOW rendering does not work at all --- */
const clonedEmployee = { ...employee };
clonedEmployee.address = "Salamati !!!";
console.log(clonedEmployee);
console.log(employee);

// We need to  use JSON.parse(JSON.stringify(obj));

const deepClonedEmployee = JSON.parse(JSON.stringify(employee));

deepClonedEmployee.address = {
  street: "Iqbal Colony, Sonawara",
  houseNo: "277"
};

console.log(deepClonedEmployee.address);
console.log(employee.address);
