// console.log("helo world");

// let age: number = 25;

// if (age < 50)
//     age += 5;

// console.log(`Age is now: ${age}`);


// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;  // any type can be anything

// function render(document: any) {
//     console.log(document);
// }



//declaring an arry
// let numbers: number[] = [1, 2, 3, 4, 5];
// let randomArray = [];
// randomArray[0] = 1;
// // number[0] = "hello";

// numbers.forEach((n) => {
//     console.log(n);
// });


// let user: [number, string, boolean] = [1, "John", true];
// user.push(2); // Adding another element to the tuple
// console.log(user); // Output: [1, "John", true, 2]

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;

// function calculateTax(income: number): number {
//     if (income < 50_000) {
//         return income * 0.1;
//     } else {
//         return income * 0.2;
//     }
// }

//optional parameter
// function calculateTax(income: number, taxYear: number): number {
//     if (taxYear < 2022) {
//         return income * 0.1;
//     } else {
//         return income * 0.2;
//     }
// }


// // objects

// let employee: { readonly id: number, name: string, retire: (date: Date) => void } = { id: 1, name: "John", retire: (date: Date) => { console.log(date); } };


// type aliases

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }


// let employee: { readonly id: number, name: string, retire: (date: Date) => void } = { id: 1, name: "John", retire: (date: Date) => { console.log(date); } };



// function kgToLbs(weight: number | string): number {
//     if (typeof weight === "number")
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }

// customer type
// type Draggable = {
//     drag: () => void;
// }
// type Resizable = {
//     resize: () => void;
// }

// // intersection type : combination of two types
// type UIwidget = Draggable & Resizable;

// let textBox: UIwidget = {
//     drag: () => { console.log("dragging..."); },
//     resize: () => { console.log("resizing..."); }
// };