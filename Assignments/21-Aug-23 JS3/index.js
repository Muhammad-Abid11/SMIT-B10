// 1. Write a program that takes input a name from user & greet the
// user like this:

var name = prompt("Please enter your name", "Name");
console.log("Hi", name);

// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser.If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.

var table = +prompt("Enter a number to generate its table", 5)
console.log(table + " x " + " 1 = " + table * 1);
console.log(table + " x " + " 2 = " + table * 2);
console.log(table + " x " + " 3 = " + table * 3);
console.log(table + " x " + " 4 = " + table * 4);
console.log(table + " x " + " 5 = " + table * 5);
console.log(table + " x " + " 6 = " + table * 6);
console.log(table + " x " + " 7 = " + table * 7);
console.log(table + " x " + " 8 = " + table * 8);
console.log(table + " x " + " 9 = " + table * 9);
console.log(table + " x " + " 10 = " + table * 10);


// 3. Write a program to take “city” name as input from user.If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

var city = prompt("Enter City Name", "Karachi or Islamabad").toUpperCase();
if (city == "KARACHI") {
    console.log("Welcome to city of lights")
} else if (city == "ISLAMABAD") {
    console.log("Welcome to city of Burger!")
}
else {
    console.log("NO Data found!")
}

// 4. Write a program to take “gender” as input from user.If the
// user is male, give the message: Good Morning Sir.If the user is
// female, give the message: Good Morning Ma’am.


var gender = prompt("Enter Gender ", "Male or Female").toUpperCase();
if (gender == "FEMALE") {
    console.log("Good Morning Ma’am")
}
else if (gender == "MALE") {
    console.log("Good Morning Sir")
}
else {
    console.log("Check krwao ")
}


// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:

var city = prompt("Enter Traffice signal color", "Red yellow green").toLowerCase();
if (city == "red") {
    console.log("vehicles must stop")
} else if (city == "yellow") {
    console.log("vehicles should get ready to move")
}
else {
    console.log("vehicle can move now")
}


// 6. Write a program to take input max age & current age from
// user.If the current age is less than or equal to max age, show
// the message “You are welcome”


var maxAge = +prompt("Enter Max Age ", "Number");
var curAge = +prompt("Enter Current Age ", "Number");
if (curAge <= maxAge) {
    console.log("You are welcome")
}
else {
    console.log("Sorry better luck next time")
}


// 7. Write a program to take input remaining fuel in car(in litres)
// from user.If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”


var fuel = +prompt("Remaining Fuel in Car ", "Number");
if (fuel <= 0.25) {
    console.log("Please refill the fuel in your car")
}
else {
    console.log("Enjoy the Ride")
}


// 8.

// a
var a = 4;
if (++a === 5) {
    console.log("given condition for variable a is true"); //it works
}


// b.
var b = 82;
if (b++ === 83) {
    console.log("given condition for variable b is true"); //it will not work
}

// c.
var c = 12;
if (c++ === 13) {
    console.log("condition 1 is true"); //it will not work
}
if (c === 13) {
    console.log("condition 2 is true");//it works
}
if (++c < 14) {
    console.log("condition 3 is true");//it will not work
}
if (c === 14) {
    console.log("condition 4 is true");//it works
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    console.log("The cost equals");//it works
}

// e.
if (true) {
    console.log("True");//it works
}
if (false) {
    console.log("False");//it works
}

// f.
if ("car" < "cat") {
    console.log("car is smaller than cat");//it works
}

// 9

var maths = +prompt("Enter Maths Makrs");
var eng = +prompt("Enter eng Makrs");
var sindhi = +prompt("Enter sindhi Makrs");

var totalMarks = +prompt("Enter total marks");
var obtainedMarks = maths + eng + sindhi;
var percentage = obtainedMarks / totalMarks * 100;

if (percentage >= 80) {
    console.log("A+ and your percentage is ", percentage)
} else if (percentage >= 70) {
    console.log("A+ and your percentage is ", percentage)
}
else if (percentage >= 70) {
    console.log("B and your percentage is ", percentage)
}
else if (percentage >= 60) {
    console.log("C and your percentage is ", percentage)
}
else {
    console.log("Failed and your percentage is  ", percentage)
}


// 10


var item1 = prompt("Enter Name of item 1");
var item2 = prompt("Enter Name of item 2");
var item1Price = +prompt("Enter Price of item 1");
var item2Price = +prompt("Enter Price of item 2");
var quanitem1 = +prompt("Enter Quantity of item 1");
var quanitem2 = +prompt("Enter Quantity of item 2");
var charges = +prompt("Enter Shipping charges");

console.log("Price of " + item1 + " is " + item1Price);
console.log("Quantity of " + item1 + " is " + quanitem1);
console.log("Price of " + item2 + " is " + item2Price);
console.log("Quantity of " + item2 + " is " + quanitem2);
console.log("Shipping Charges ", charges);

var cost = item1Price * quanitem1 + item2Price * quanitem2 + charges
console.log("Total cost of your order is " + cost + " PKR")
if (cost > 2000) {
    var tenPecentage = cost * 10 / 100;
    cost = cost - tenPecentage;
}
console.log("Discounted Price is " + cost + " PKR")


//11


var secretNum = +prompt("Enter Random Number");
var guestNum = +prompt("Enter Secret Number");
if (secretNum === guestNum) {
    console.log("Bingo! Correct answer");
}
else {
    console.log("Close enough to the correct answer");
}


// 12

var divisible = +prompt("Enter Number");
if (divisible % 3 === 0) {
    console.log(divisible + " is divisible by 3 ")
} else {
    console.log(divisible + " is not divisible by 3 ")
}


// 13

var Names1 = prompt("Enter Name of Team 1");
var scores1 = +prompt("Enter Score of Team 1");
var Names2 = prompt("Enter Name of Team 2");
var scores2 = +prompt("Enter Score of Team 2");

if (scores1 > scores2) {
    console.log(Names1 + " have won the game")
} else {
    console.log(Names2 + " have won the game")
}

// 14


var str = prompt("Enter any String value")
var nums = +prompt("Enter any Number value")
var bool = prompt("Enter any boolean value")
if (typeof (str) === "string") {
    console.log(str + " is a string")
}
if (typeof (nums) === "number") {
    console.log(nums + " is a number")
}
if (typeof (bool) === "boolean" || typeof (bool) === "boolean") {
    console.log(bool + " is a boolean")
} else {
    console.log("Invalid Value")
}


// 15

var even = +prompt("Enter any Number value")
if (even % 2 === 0) {
    console.log(even + " is an even Number")
} else {
    console.log(even + " is an odd Number")

}

// 16

var temp = +prompt("Enter Temperature of Karachi");
if (temp > 40) {
    console.log("It is too hot outside")
} else if (temp > 30) {
    console.log("The Weather today is Normal")
} else if (temp > 20) {
    console.log("Today's Weather is cool")
} else {
    console.log("OMG! Today's weather is so cool")
}

// 17

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var opera = prompt("Enter Operation + - * /");
if (opera == '+') {
    var num3 = num1 + num2
    console.log(num1 + " + " + num2 + " = " + num3)
} else if (opera == '-') {
    var num3 = num1 - num2
    console.log(num1 + " - " + num2 + " = " + num3)
}
else if (opera == '*') {
    var num3 = num1 * num2
    console.log(num1 + " * " + num2 + " = " + num3)
}
else if (opera == '/') {
    var num3 = num1 / num2
    console.log(num1 + " / " + num2 + " = " + num3)
}


// 18


var days = prompt("Enter Day Name").toLowerCase();
if (days == "monday" || days == "tuesday" || days == "wednesday" || days == "thursday" || days == "friday") {
    console.log(days + " It’s a week day")
}
else if (days == "saturday") {
    console.log(days + " Its Weekend")
}
else if (days == "sunday") {
    console.log(days + " Yay! It's a Holiday")
} else {
    console.log("Error")
}



// 19


var result = +prompt("Enter Score");
if (result > 50) {
    console.log("You are passed")
} else {
    console.log("Try Again")
}


// 20

var numb1 = +prompt("Enter Number 1");
var numb2 = +prompt("Enter Number 2");
if (numb1 > numb2) {
    console.log("The greater number of " + numb1 + " and " + numb2 + " is " + numb1);
} else {
    console.log("The greater number of " + numb1 + " and " + numb2 + " is " + numb2);
}


// 22

var numberr = +prompt("Enter a number");
if (numberr >= 0) {
    console.log("Number is Positive")
} else {
    console.log("Number is Negative")
}


// 23


