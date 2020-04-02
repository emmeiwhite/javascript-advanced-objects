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

/* --- ES7, Some new features 
      1) includes() function          2) exponential operator
--- */

console.log("Helloooo".includes("l")); // true
console.log(["birds", "fishes", "humans"].includes("humans")); // true
console.log(["birds", "fishes", "humans"].includes("fish")); // false

const square = x => x ** 2;
const cube = x => x ** 3;

console.log(`Square of 5 is :${square(5)}`);
console.log(`Cube of 5 is :${cube(5)}`);

/* ---
ES8 : New Object modifier functions. Before ES8 we used to have Object.keys() only.
Object.values() and  Object.entries() ;
---*/

// 1. Object.keys()
const laptop = {
  brand: "Lenovo",
  color: "silver",
  processor: "i5"
};

const laptopKeys = Object.keys(laptop);
console.log("Keys of laptop are :", laptopKeys);
laptopKeys.forEach(key => {
  console.log(laptop[key]);
});

// 2. Object.values() | Now we can directly get the values  of an object without needing the keys.

const laptopValues = Object.values(laptop);
console.log(laptopValues); // Array of the values [ 'Lenovo', 'silver', 'i5' ]

// 3. Object.entries()

console.log(Object.entries(laptop));
const keyValues = Object.entries(laptop).map(arr => {
  return arr[0] + " : " + arr[1];
});

console.log(keyValues);

// ES8 awesome new feature :: async / await | Will discuss this later

/* Let's discuss some more loops : ES6 concepts !!!
  1) for in : Used with Objects. To enumerating over objects 
  2) for of : Used with Arrays and Strings. To iterate over arrays and strings in javascript
*/

const basket = ["apples", "oranges", "grapes"];

// for of
for (let item of basket) {
  console.log(item); // Arrays and Strings are Iterables
}

for (let item of "Hello") {
  console.log(item);
}

// for in
const car = {
  model: "ferrari",
  price: "1billion $",
  color: "silver"
};
for (let item in car) {
  console.log(item);
}

// Now let's try to use 'for of' with Objects and 'for in' with arrays
for (let item in basket) {
  // This returns the index of the arrrays
  console.log(item);
}

/*---  
  for(let item of car) {
    console.log(item);
  }
---*/

const rows = [
  {
    id: 3,
    title: "sometitle",
    catid: 55,
    img: "file"
  },
  {
    id: 4,
    title: "sometitle",
    catid: 55,
    img: "file"
  },
  {
    id: 5,
    title: "sometitle",
    catid: 55,
    img: "file"
  }
];

const newArray = rows.map(obj => {
  return {
    id: obj.id,
    img: obj.img
  };
});
console.log(newArray);

// 'for of' with Object.entries() revision
const test = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(test)) {
  console.log(key, value);
}

console.log(Object.entries(test));
