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
// let user: { name: string; age?: number } = {
//   name: "Bob",
//   age: 30,
// };

// let user2: { name: string; age: number } = {
//   name: "Bobby",
//   age: 32,
// };

// ------- Type Aliases -------

//PascalCase
// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// let user: User = {
//   name: "Bob",
//   age: 30,
//   email: "bob@Blob.com",
// };

// let user2 = {
//   name: "Bobby",
//   // age: 32,
//   email: "bobby@bob.com",
// };

// function greetUser(user: User) {
//   console.log(`Hello, ${user.name}`);
// }

// greetUser(user);

// type ID = string | number;

// ------- Interfaces -------
// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Bob",
//   age: 30,
// };

// Which one do I use? Interface or Type Alias
// - interface can be extended.
// - it can ALSO do: union types, naming primitives and tuples

// ------- Interface extension -------
// This come from OOP, specifically the inheritance pillar
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

let worker: Employee = {
  name: "Bob",
  age: 30,
  jobTitle: "Accounting",
};

// ------- Optional and default parameters in functions -------

// function greet(name: string, title?: string) {
//   if (title) {
//     return `good morning ${title} ${name}`;
//   }
//   return `Hello, ${name}`;
// }

// function greet(name: string, title = "Mr.") {
//   return `good morning ${title} ${name}`;
// }
// console.log(greet("Bob", "Mrs."));

// ------- Function return types -------
// function calculateTotal(price: number, qty: number): number {
//   return `the total is: ${price * qty}`
// }

// ------- Union types and literal types -------
let id: string | number;
id = "abcd123";
id = 90;
// id = true

// type Status = "active" | "inactive" | "pending";

let userStatus: Status = "active";

// ------- Type narrowing -------
function printId(id: string | number) {
  if (typeof id === "string") {
    // right HERE, TS knows we have narrowed down the type to string
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// Also type narrowing:
// function greet(name: string, title?: string) {
//   if (title) {
//     return `good morning ${title} ${name}`;
//   }
//   return `Hello, ${name}`;
// }

// ------- null, undefined, unknown -------
// - undefined -> NOT deliberate
// - null -> Deliberate
let middleName: string | null = null;
let nickname: string | undefined;

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data: unknown = await response.json(); // data is of type unknown

  if (typeof data === "object" && data !== null && "name" in data) {
    console.log("got a user object");
    console.log(data.name);
  }

  return data;
}

// Enums

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let myRole: Role = Role.Admin;

// console.log(myRole);

type Role2 = "ADMIN" | "USER" | "GUEST";
let myRole2: Role2 = "ADMIN";

// ------- Generics -------

// function firstElement(arr: any[]): any {
//   return arr[0];
// }

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// const a = firstElement<number>([1, 2]);
// console.log(a);

// const b = firstElement<string>(["a", "b", "c"]);
// console.log(b);

// const c = firstElement<boolean>([true, false]);
// console.log(c);

function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = makePair<string, number>("age", 30);
// console.log(pair);

function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

// logLength([1, 2, 4]);
// logLength("hello")

type Box<T> = {
  value: T;
};

const numbersBox: Box<number> = { value: 50 };
const numbersBox1: Box<string> = { value: "Hello" };

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// interface User {
//   name: string;
//   age: number;
// }

interface Product {
  name: string;
  price: number;
  availability: boolean;
}

const userResponse: ApiResponse<User> = {
  status: 200,
  message: "OK",
  data: { name: "Bob", age: 30 },
};

const productsResponse: ApiResponse<Product> = {
  status: 200,
  message: "OK",
  data: { name: "Phone", price: 1000, availability: true },
};

// ------- Built=in utility types -------
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User, "id" | "name" | "age">;

const preview: UserPreview = { id: 1, name: "Bob", age: 10 };

type NewUser = Omit<User, "id">;
const newUser: NewUser = {
  name: "Bob",
  email: "bob@bobby.com",
  age: 30,
};

type UserRoles = Record<string, string>;

const roles: UserRoles = {
  Bob: "admin",
  Steve: "user",
  Jane: "viewer",
};

type Status = "active" | "inactive" | "pending";
type StatusLabels = Record<Status, string>;

const labels: StatusLabels = {
  active: "Currently active",
  inactive: "No longer active",
  pending: "Awaiting approval",
};
