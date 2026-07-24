class Locker<T> {
    private item: T;

    constructor(value: T) {
        this.item = value;
    }

    getItem(): T {
        console.log("Opening Locker...");
        return this.item;
    }

    setItem(value: T): void {
        this.item = value;
        console.log("Locker Updated!");
    }
}
const money = new Locker<number>(5000);
console.log("Money:", money.getItem());
const documentFile = new Locker<string>("Resume.pdf");
console.log("Document:", documentFile.getItem());
interface Laptop {
    brand: string;
    ram: number;
}

const laptop = new Locker<Laptop>({
    brand: "Dell",
    ram: 16
});

console.log("Laptop:", laptop.getItem().brand);