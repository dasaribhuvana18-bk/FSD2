interface HasLength {
    length: number;
}

function printLength<T extends HasLength>(item: T): number {
    console.log("Value:", item);
    console.log("Length:", item.length);
    return item.length;
}

printLength("TypeScript");

printLength([10, 20, 30, 40]);

interface Book {
    title: string;
    length: number;
}

const book: Book = {
    title: "Java Programming",
    length: 350
};

printLength(book);

interface Movie {
    name: string;
    length: number;
}

const movie: Movie = {
    name: "Inception",
    length: 148
};

printLength(movie);