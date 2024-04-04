
let myCar = {
    color: 'red',
    make: 'Ford',
    model: 'Mustang',
    drive: function(miles){
        console.log(`${this.color} ${this.make} ${this.model} has driven ${miles} miles`)
    }
}

console.log(myCar);
console.log(typeof myCar);
console.log(myCar.drive);

myCar.drive(100);

// ES5 Object Prototypes
// The class keyword wasn't added to JS until ES6, and replaces the functionality we are about to talk about. You will still see alot of ES5 prototypes in the wild, so be sure to understand what they are doing.

// Lets build out a JS object to be reuseable.

let testPerson = {};
testPerson.age = 22;
testPerson.name = 'John';
testPerson.jump = function(){console.log(this.name + ' just jumped')};
testPerson.squat = function(){console.log(this.name + ' just squatted')};

console.log(testPerson);

testPerson.jump();
testPerson.squat();


// JavaScript Functions are Objects!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

function doesNothing(){};

console.log(doesNothing);
console.log(typeof doesNothing); // 'function' not 'object'

doesNothing.aKey = 'a value';

console.log(doesNothing.aKey);
console.log(doesNothing.name);




const createPerson = function(name, age){
    createPerson.realName = name; // use .realName because .name is already a read-only property
    createPerson.age = age;
    createPerson.jump = function(){console.log(this.realName + ' just jumped')};
    createPerson.squat = function(){console.log(this.realName + ' just squatted')};

    return createPerson;
}

let person1 = createPerson('Julie', 25);
console.log(person1);

person1.jump();
person1.squat();

// new keyword
// The new keyword will initialize an object and return it for you. It will also allow the use of the this keyword
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new


const createPerson2 = function(name, age){
    this.name = name; 
    this.age = age;
    this.jump = function(){console.log(this.name + ' just jumped')};
    this.squat = function(){console.log(this.name + ' just squatted')};
}

let person2 = new createPerson2('Mike', 23);
console.log(person2);

person2.jump();
person2.squat();


// The above method works fine, but it has an issue. Every time I make a new person, I have to save all the person's methods to memory. 
// We can define a prototype for all objects to share to prevent wasting memory space. These are stored in memory once, and use the this 
// keyword to find the correct references. This saves tons of memory space, and prototypes should be used with ES5 objects when declaring 
// many instances of the same object.

let sally = new createPerson2('Sally', 45);
let frank = new createPerson2('Frank', 76);

console.log(sally);
console.log(frank);


console.log(sally.jump === frank.jump); // false


let personMethods = {
    jump: function(){console.log(this.name + ' just jumped')},
    squat: function(){console.log(this.name + ' just squatted')}
}


const createPerson3 = function(name, age){
    this.name = name; 
    this.age = age;
    this.jump = personMethods.jump;
    this.squat = personMethods.squat;
}


let hannah = new createPerson3('Hannah', 43);
let bill = new createPerson3('Bill', 14);

console.log(hannah.jump === bill.jump);

hannah.jump();
bill.jump();


// Every function has a property called .prototype that is an object

function doNothing(){};

console.log(doNothing.prototype);
console.log(typeof doNothing.prototype);


// Object.create(obj)
// creates a new object, using an existing object as the prototype of the newly created object (aka the look up)

let parent = {
    first: 'Seamus',
    last: 'Callahan',
    nationality: 'Irish',
    bloodType: 'O-'
};

console.log(parent);

let child1 = Object.create(parent);
child1.first = 'Eileen';

console.log(child1);
console.log(child1.first);
console.log(child1.last);
console.log(child1.nationality);
console.log(child1.bloodType);




const createPerson4 = function(name, age){
    this.name = name; 
    this.age = age;
}

createPerson4.prototype.jump = function(){console.log(this.name + ' just jumped')}
createPerson4.prototype.squat = function(){console.log(this.name + ' just squatted')}


let dan = new createPerson4('Dan', 28);
console.log(dan);

dan.jump();
dan.squat();

// Possible but bad practice
// You can modify existing built in prototypes at any time
// considered bad practice because it can lead to confusion and unforeseen side effects

String.prototype.toTitleCase = function(){
    words = this.toLowerCase().split(' ');
    for (let i=0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
};

const sentence = "toDay is ThuRSdaY ApRiL 4tH anD wE ArE LearNinG JavAScriPT";
console.log(sentence.toTitleCase());

