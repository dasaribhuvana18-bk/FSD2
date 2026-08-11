"use strict";
class Locker {
    constructor(value) {
        this.item = value;
    }
    getItem() {
        console.log("Opening Locker...");
        return this.item;
    }
    setItem(value) {
        this.item = value;
        console.log("Locker Updated!");
    }
}
const money = new Locker(5000);
console.log("Money:", money.getItem());
const documentFile = new Locker("Resume.pdf");
console.log("Document:", documentFile.getItem());
const laptop = new Locker({
    brand: "Dell",
    ram: 16
});
console.log("Laptop:", laptop.getItem().brand);
