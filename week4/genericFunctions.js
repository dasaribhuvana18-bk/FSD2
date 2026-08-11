"use strict";
function identity(value) {
    return value;
}
console.log("Number:", identity(100));
console.log("String:", identity("Hello"));
console.log("Boolean:", identity(true));
function firstElement(items) {
    return items[0];
}
const numbers = [10, 20, 30, 40];
const fruits = ["Apple", "Banana", "Orange"];
console.log("First Number:", firstElement(numbers));
console.log("First Fruit:", firstElement(fruits));
function wrapItem(item) {
    return {
        data: item,
        date: new Date()
    };
}
const student = wrapItem({
    id: 4215,
    name: "Bhuvana"
});
console.log("Student:", student.data);
console.log("Created On:", student.date);
