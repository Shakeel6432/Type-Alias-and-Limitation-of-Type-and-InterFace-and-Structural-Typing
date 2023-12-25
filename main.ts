// Types Alias

// First Example

type Age = number;

let userAge: Age = 27;

function printAge(age: Age) {
    console.log(`User age is ${age}`);
};

printAge(userAge);




// Second Example

type User = {
    id: number,
    name: string,
    age: Age, // Using the previously defined 'Age' type alias
};

function createUser(id: number, name: string, age: Age): User {
    return {
        id,
        name,
        age,
    };
};

let newUser: User = createUser(230684, "Muhammad Shakeel", 27);

console.log(newUser);





// Limitation of type and interface

// First Example

// Error: 'User' was also declared here.
type User = {
    id: number,
    name: string,
};

// Error: Duplicate identifier 'User'.
type User = {
    email: string
}





// Second Example

interface User {
    id: number,
    name: string,
};

// Extending 'User' interface
interface ExtendUser extends User {
    email: string
};

// Using Built-in type
interface numberArray extends Array<number> { }


let user: ExtendUser = {
    id: 230684,
    name: 'Muhammad Shakeel',
    email: 'Shakeel6432@gmail.com',
};

let number: numberArray = [11, 22, 33, 44, 55]

console.log(user, number);





// Structural Typing

// First Example

type Print2D = { x: number, y: number };

function printCoordinates(print: Print2D) {
    console.log(`Coordinates: ${print.x}, ${print.y}`);
};

let myPrint = {x: 27, y: 30};

printCoordinates(myPrint);






// Second Example

interface Student {
    name: string,
    age: number,
};

function Std(student: Student) {
    console.log(`My name is ${student.name} and i'm ${student.age} year old.`);
};

let newStudent = {name: "Muhammad Shakeel", age: 27};

Std(newStudent);