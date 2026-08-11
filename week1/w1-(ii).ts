let data: any = 100;
data = "TypeScript";
data = false;

let inputValue: unknown = "Bhuvana";

if (typeof inputValue === "string") {
    console.log("String Length: " + inputValue.length);
}

function showMessage(text: string): void {
    console.log("Message: " + text);
}

showMessage("Program Executed Successfully");