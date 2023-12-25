// Types Alias
let userAge = 27;
function printAge(age) {
    console.log(`User age is ${age}`);
}
;
printAge(userAge);
function createUser(id, name, age) {
    return {
        id,
        name,
        age,
    };
}
;
let newUser = createUser(230684, "Muhammad Shakeel", 27);
console.log(newUser);
;
;
let user = {
    id: 230684,
    name: 'Muhammad Shakeel',
    email: 'Shakeel6432@gmail.com',
};
let number = [11, 22, 33, 44, 55];
console.log(user, number);
function printCoordinates(print) {
    console.log(`Coordinates: ${print.x}, ${print.y}`);
}
;
let myPrint = { x: 27, y: 30 };
printCoordinates(myPrint);
;
function Std(student) {
    console.log(`My name is ${student.name} and i'm ${student.age} year old.`);
}
;
let newStudent = { name: "Muhammad Shakeel", age: 27 };
Std(newStudent);
export {};
