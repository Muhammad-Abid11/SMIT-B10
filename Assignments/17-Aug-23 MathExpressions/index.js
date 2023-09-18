// 1. Write a program that take two numbers & add them in a new 
// variable.Show the result in your browser.

var num1 = +prompt("Enter 1st number", "Number");
var num2 = +prompt("Enter 2nd number", "Number");
var result = num1 + num2
alert("Sum of " + num1 + " and " + num2 + " is " + result);


// 2. Repeat task1 for subtraction, multiplication, division &
// subtraction
result = num1 - num2
alert("Difference of " + num1 + " and " + num2 + " is " + result);

// , multiplication
result = num1 * num2
alert("multiplication of " + num1 + " and " + num2 + " is " + result);

// , division
result = num1 / num2
alert("division of " + num1 + " and " + num2 + " is " + result);

//remainder
result = num1 % num2
alert("Remainder of " + num1 + " and " + num2 + " is " + result);


// 3.

var data;
alert("I am decleared variable " + data);
data = 3;
alert("Initial Value : " + data);
data++;
alert("Value after increment is: " + data);
data = data + 7;
alert("Value after addition is: " + data);
data--;
alert("Value after decrement is: " + data);
data = data % 3;
alert("the remainder is: " + data);


// 4. Cost of one movie ticket is 600 PKR.Write a script to store 
// ticket price in a variable & calculate the cost of buying 5 tickets 
// to a movie.Example output:


var cost = 600;
var tickets = +prompt("Enter Number of Tickets", "No. of Tickets");
var total = cost * tickets;
alert("Total cost to buy " + tickets + " tickets to a movie is " + total + " PKR")

//  5. Write a script to display multiplication table of any number in
// your browser.E.g.

var table = +prompt("Enter Number ");
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



// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a.Store a Celsius temperature into a variable.
// b.Convert it to Fahrenheit & output “NNoC is NNoF”.
// c.Now store a Fahrenheit temperature into a variable.
// d.Convert it to Celsius & output “NNoF is NNoC”.

var Celsius = +prompt("Enter Temperature in Celsius");
convF = (Celsius * 9 / 5) + 32
alert(Celsius + "C is " + convF + "F");

var Fahrenheit = +prompt("Enter Temperature in Fahrenheit");
convC = (Fahrenheit - 32) * 5 / 9
alert(Fahrenheit + "F is " + convC + "C");


// 7. Write a program to implement checkout process of a shopping
//    cart system for an e - commerce website.Store the following in variables
// a.Price of item 1
// b.Price of item 2
// c.Ordered quantity of item 1
// d.Ordered Quantity of item 2
// e.Shipping charges

var Priceitem1 = +prompt("enter item 1 Price");
var Priceitem2 = +prompt("enter item 2 Price");
var quan1 = +prompt("enter quantity 1 Price");
var quan2 = +prompt("enter quantity 2 Price");
var shipCharges = +prompt("enter charges");
console.log("Price of item 1 is " + Priceitem1);
console.log("Quantity of item 1 is " + quan1);
console.log("Price of item 2 is " + Priceitem2);
console.log("Quantity of item 2 is " + quan2);
console.log("Shipping Charges " + shipCharges);
var totals = (Priceitem1 * quan1) + (Priceitem2 * quan2) + shipCharges
console.log("Total cost of your order is " + totals)


// 8. Write a script to take total marks & marks obtained by a
// student.Compute the percentage & show the result in your browser

var totalmarks = +prompt("Enter Total Marks", "enter number")
var obtmarks = +prompt("Enter Obtained Marks", "enter number")
var perce = (obtmarks / totalmarks) * 100;
console.log("Percentage : " + perce);



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees.Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)

var dollar = +prompt("Enter Dollar Amount", "enter number")
var Riyal = +prompt("Enter Riyal Amount", "enter number")
var pkr = (dollar * 104) + (Riyal * 28);
console.log("Total PKR is ", pkr);


// 10. Write a program to initialize a variable with some number 
// and do arithmetic in following sequence:
// a.Add 5
// b.Multiply by 10
// c.Divide the result by 2 
// Perform all calculations in a single expression.

var anyNum = 10;
anyNum = (anyNum + 5) * 10 / 2;
console.log(anyNum);

// 11. The Age Calculator: Forgot how old someone is ?
//      Calculate  it!
//      a.Store the current year in a variable.
//      b.Store their birth year in a variable.
//      c.Calculate their 2 possible ages based on the stored values.
//      Output them to the screen like so: “They are either NN or NN 
//      years old”. 


var dobYear = +prompt("Enter Your Date of Birth");
var curYear = +prompt("Enter Your Current Year");
var age = curYear - dobYear;
alert("They are either " + age + " or " + ++age + " year");


// 12. The Geometrizer: Calculate properties of a circle.
//     a.Store a radius into a variable.
//     b.Calculate the circumference based on the radius, and
//       output “The circumference is NN”.
//      (Hint: Circumference of a circle = 2 π r, π = 3.142)
//      Calculate the area based on the radius, and output “The area is
//      NN”.(Hint: Area of a circle = π r2, π = 3.142)


var radius = +prompt("Enter Radius", "Number");
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
console.log("The circumference is ", circumference)
console.log("The area is ", area)


// 13.  Write a program to take a number in a variable, do the
//      required arithmetic to display the following result in your
//      browser:

var digit = +prompt("Enter Number", "Number")
console.log("Result:")
console.log("The value of a is: ", digit)
console.log("The value of ++a is: ", ++digit)
console.log("Now The value of a is: ", digit)
console.log("The value of a++ is: ", digit++)
console.log("Now The value of a is: ", digit)
console.log("The value of --a is: ", --digit)
console.log("Now The value of a is: ", digit)
console.log("The value of a-- is: ", digit--)
console.log("Now value of a is: ", digit)



// 14. What will be the output in variables a, b & result after 
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2, b = 1;
console.log("Result --a - --b + ++b + b-- is ", --a - --b + ++b + b--);

// 15. The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is ? Wonder no
// more.
//     a.Store your favorite snack into a variable
//     b.Store your current age into a variable.
//     c.Store a maximum age into a variable.
//     d.Store an estimated amount per day(as a number).
//     e.Calculate how many would you eat total for the rest of 
// your life.
// MATH	EXPRESSIONS | JAVASCRIPT
// Page	11 of	11
// Output the result to the screen like so: “You will need NNNN to 
// last you until the ripe old age of NN”.


var snackName = "Kurkury"
var CurAge = +prompt("Enter Current Age", "Number");
var maxAge = +prompt("Enter Maximun Age", "Number");
var eatSnack = +prompt("Enter Number of Snacks per year", "Number");
console.log("Favorite Snack : ", snackName);
console.log("Current Age : ", CurAge);
console.log("Estimated Maximun Age : ", maxAge);
console.log("AMount of snacks per day : ", eatSnack);
var totalSnacks = (maxAge - CurAge) * eatSnack
console.log("You will need ", totalSnacks, " ", snackName, " to last you until the ripe old age of ", maxAge)

