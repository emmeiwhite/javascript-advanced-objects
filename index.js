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
