"use strict";
// string
var myName = 'Jeffrey';
// myName = 32;
// number
var myAge = 32;
// myAge = 'Jeffrey';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = "100";
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2?
})(Color || (Color = {}));
var gray = Color.Gray;
var green = Color.Green;
var blue = Color.Blue;
// console.log(`gray: ${gray}`);
// console.log(`green: ${green}`);
// console.log(`blue: ${blue}`);
// any
var car = "BMW";
// console.log(car);
car = {
    brand: "BMW",
    series: 3
};
// console.log(car);
// functions
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    // return 'Hello!';
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 3));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Jeffrey',
    age: 32
};
userData = {
    name: 'Mary',
    age: 27
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// complex = {};
