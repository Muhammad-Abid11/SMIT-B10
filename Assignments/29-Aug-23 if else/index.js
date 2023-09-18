// Q1

var num = +prompt("Enter a number ");
if (num % 3 === 0) {
    console.log(num + " Number is divisible by 3")
} else {
    console.log(num + " Number is not divisible by 3")
}

// Q2

var nums = +prompt("Enter a number ");
if (nums % 2 === 0) {
    console.log(nums + " Number is Even ")
} else {
    console.log(nums + " Number is ODD")
}

// Q3

var num3 = +prompt("Enter a number");
if (num3 > 18) {
    console.log("Old enough")
} else {
    console.log("Too Young!")
}

// Q4

var name4 = prompt("Enter your Name", "ABID");
if (name4 === "Abid") {
    console.log("Hi Abid")
}

// Q5

var num = +prompt("Enter a number ");
switch (num % 3) {
    case 0:
        console.log(num + " Number is divisible by 3.");
        break;
    default:
        console.log(num + " Number is not divisible by 3.");
        break;
}

// Q6


var num6 = prompt("Enter a Number or String ");
if (num6.charCodeAt() >= 48 && num6.charCodeAt() <= 57) {
    console.log("It's a Number")
} else if (num6.charCodeAt() >= 65 && num6.charCodeAt() <= 90) {
    console.log("It's a Capital Alphabets")
}
else if (num6.charCodeAt() >= 97 && num6.charCodeAt() <= 122) {
    console.log("It's a Small Alphabets")
} else {
    console.log("i don't know")
}

// Q7

var num7a = +prompt("Enter first Number ");
var num7b = +prompt("Enter Second Number ");
var operator = prompt("Enter Operation + - / * ");
switch (operator) {
    case "+":
        var num7d = num7a + num7b
        console.log(num7a + " + " + num7b + " = " + num7d);
        break;
    case "-":
        var num7d = num7a - num7b
        console.log(num7a + " - " + num7b + " = " + num7d);
        break;
    case "*":
        var num7d = num7a * num7b
        console.log(num7a + " * " + num7b + " = " + num7d);
        break;
    case "/":
        var num7d = num7a / num7b
        console.log(num7a + " / " + num7b + " = " + num7d);
        break;

    default:
        console.log("Error")
        break;
}

// Q8


var time = +prompt("Enter Time in 24Hour format")
if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
}
else if (time >= 2100 && time < 2359) {
    console.log("Good night!");
}

// Q9

var year = +prompt("Enter your year")
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// Q10

var pass = prompt("Enter your password");
var passCheck = prompt("Enter your password Again!");
if (pass == passCheck) {
    console.log("Correct! The password you entered matches the original password")
} else {
    console.log("Incorrect password")
}


// Q11

var firstName = "Ali";
if (firstName === "Fahad") {
    console.log("Hello Fahad!");
} else {
    console.log("you are not Fahad!");
}

// Q12


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting)
} else {
    greeting = "Good evening";
    console.log(greeting)
}


// Q13

var num13 = +prompt("Enter First Number");
var nums13 = +prompt("Enter First Number");
if (num13 === nums13) {
    console.log("Both Values are Equal");
} else if (num13 > nums13) {
    console.log(num13 + " is greaterthan " + nums13);
} else {
    console.log(num13 + " is lessthan " + nums13);
}


// Q14


var num14 = +prompt("Enter First Number");
if (num14 > 0) {
    console.log("The Number is Positive");
} else {
    console.log("The Number is Negative");
}


// Q15

var time = +prompt("Enter Current Hour in 24 Hour format");
if (time >= 6 && time <= 9) {
    console.log("Breakfast is served");
} else if (time >= 11 && time <= 13) {
    console.log("Time for lunch");
}
else if (time >= 17 && time <= 20) {
    console.log("It's dinner time");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack")
}

// Q16


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


// Q17
// a=97 e=101 i=105 o=111 u=117

var vol = prompt("enter a character alphabets")
if (vol.toLowerCase().charCodeAt() == 97 || vol.toLowerCase().charCodeAt() == 101 || vol.toLowerCase().charCodeAt() == 105 || vol.toLowerCase().charCodeAt() == 111 || vol.toLowerCase().charCodeAt() == 117) {
    console.log("It's a vowel!")
} else {
    console.log("It's a consonent!")
}


// Q18

var value = +prompt("Enter 10");
if (value != 8) {
    console.log("true")
}

// Q19

var month = +prompt("Enter month number");
switch (month) {
    case 1:
        console.log("January!")
        break;
    case 2:
        console.log("February!")
        break;
    case 3:
        console.log("March!")
        break;
    case 4:
        console.log("April!")
        break;
    case 5:
        console.log("May!")
        break;
    case 6:
        console.log("June!")
        break;
    case 7:
        console.log("July!")
        break;
    case 8:
        console.log("August!")
        break;
    case 9:
        console.log("September!")
        break;
    case 10:
        console.log("October!")
        break;
    case 11:
        console.log("November!")
        break;
    case 12:
        console.log("December!")
        break;
    default:
        console.log("Invalid Month")
        break;
}


// Q20


var num3 = +prompt("Enter a number");
(num3 > 18) ? console.log("Old enough") : console.log("Too Young!")
