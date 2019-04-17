"use strict";
// string
var myName = 'Jeffrey';
// myName = 32;
// number
var myAge = 32.1;
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
console.log("gray: " + gray);
console.log("green: " + green);
console.log("blue: " + blue);
