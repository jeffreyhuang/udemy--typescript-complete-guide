// string
let myName = 'Jeffrey';
// myName = 32;

// number
let myAge = 32.1;
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
console.log(car);
car = {
  brand: "BMW",
  series: 3
};
console.log(car);
