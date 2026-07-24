
function identity<T>(value: T): T {
    return value;
}

console.log("Number:", identity<number>(100));
console.log("String:", identity<string>("Hello"));
console.log("Boolean:", identity<boolean>(true));
function firstElement<T>(items: T[]): T {
    return items[0];
}

const numbers = [10, 20, 30, 40];
const fruits = ["Apple", "Banana", "Orange"];

console.log("First Number:", firstElement(numbers));
console.log("First Fruit:", firstElement(fruits));
function wrapItem<T>(item: T): { data: T; date: Date } {
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