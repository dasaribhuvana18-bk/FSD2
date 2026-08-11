"use strict";
function printLength(item) {
    console.log("Value:", item);
    console.log("Length:", item.length);
    return item.length;
}
printLength("TypeScript");
printLength([10, 20, 30, 40]);
const book = {
    title: "Java Programming",
    length: 350
};
printLength(book);
const movie = {
    name: "Inception",
    length: 148
};
printLength(movie);
