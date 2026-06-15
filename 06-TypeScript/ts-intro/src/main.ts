// function getDiscount(price: number, discount: number) {
//   return price - discount;
// }

// function getTotalPrice(price: number, fee: number) {
//   return price + fee;
// }

// const priceInput = "100";

// const total = getTotalPrice(priceInput, 10);
// const finalPrice = getDiscount(priceInput, 10);

// console.log(finalPrice);
// console.log(total);

// ------- Variables -------

let username: string = "Bob";
let age: number = 30;
let isLoggedIn: boolean = true;

// ------- Type Inference -------
// let city: string = "Hamburg"
let city = "Hamburg";
// city = 10

// let score: number;

// ------- Functions -------
function add(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
}

const multiply = (a: number, b: number): number => a * b;

// ------- Arrays -------
let scores: number[] = [90, 87, 21, 342];
let players: string[] = ["Bob", "Bobby", "Carl"];

// ------- Tuples -------
let coordinates: [number, number] = [34.8, -1.14];
let person: [string, number, string] = ["Bob", 30, ""];

// ------- Objects -------
let user: { name: string; age?: number } = {
  name: "Bob",
  age: 30,
};
