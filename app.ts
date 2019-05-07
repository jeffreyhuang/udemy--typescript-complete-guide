// string
let myName = 'Jeffrey';
// myName = 32;

// number
let myAge = 32;
// myAge = 'Jeffrey';

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = "100";

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
  Gray,  // 0
  Green = 100, // 1
  Blue   // 2?
}
let gray: Color = Color.Gray;
let green: Color = Color.Green;
let blue: Color = Color.Blue;
// console.log(`gray: ${gray}`);
// console.log(`green: ${green}`);
// console.log(`blue: ${blue}`);

// any
let car: any = "BMW";
// console.log(car);
car = {
  brand: "BMW",
  series: 3
};
// console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
// console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
  // return 'Hello!';
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 3));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
  name: 'Jeffrey',
  age: 32
};

userData = {
  name: 'Mary',
  age: 27
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all) {
    return this.data;
  }
};
// complex = {};

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all) {
    return this.data;
  }
};