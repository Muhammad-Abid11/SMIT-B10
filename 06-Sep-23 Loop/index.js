// Q1

for (var index = 0; index < 5; index++) {
    console.log("Hello World")
}

// Q2

for (var index = 1; index <= 10; index++) {
    console.log(index)
}

// Q3

var num = +prompt("Enter a number to print it Table")
var leng = +prompt("Enter Length of Table")
for (var index = 1; index <= leng; index++) {
    console.log(`${num} * ${index} = ${num * index}`)
}

// Q4

var A = ["“Nokia”", "“Samsung”", "“Apple”", " “Sony”", "“Huawei”"];
for (var index = 0; index < A.length; index++) {
    console.log(A[index])
}

// Q5

var fruits = ["“apple”", " “banana”", "“mango”", " “orange”", " “strawberry”"];
for (var index = 0; index < fruits.length; index++) {
    console.log(fruits[index])
}
for (var index = 0; index < fruits.length; index++) {
    console.log("Element at index " + index + " is " + fruits[index])
}

// Q6

var nItems = +prompt("Enter number of items")
var itemsArray = [];
for (let index = 0; index < nItems; index++) {
    var item = prompt("Enter item name for index " + index);
    itemsArray.push(item);
}
console.log("Number of items " + nItems)
for (var index = 0; index < itemsArray.length; index++) {
    console.log(itemsArray[index])
}

// Q7

for (let index = 0; index <= 15; index++) {
    console.log("Counting: " + index)
}
for (let index = 10; index > 0; index--) {
    console.log("Reverse Counting: " + index)
}
for (let index = 0; index <= 20; index = index + 2) {
    console.log("Even: " + index)
}
for (let index = 1; index <= 20; index = index + 2) {
    console.log("Odd: " + index)
}
for (let index = 2; index <= 20; index = index + 2) {
    console.log("Series: " + index + "k")
}

// Q8

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var find = prompt(" “cake”, “apple pie”, “cookie”, “chips”, “patties”", "What you want to order");
var statuss = false
for (let index = 0; index < A.length; index++) {
    if (find === A[index]) {
        statuss = true
        console.log(find + " is available at index " + index + " in our bakery")
    }
} if (statuss === false) {
    console.log("We are sorry. " + find + " is not available in our bakery")
}

// Q9

var A = [24, 53, 2, 78, 91, 12, 3, 1,];
let largestValue = A[0]
for (let index = 0; index < A.length; index++) {
    if (largestValue < A[index]) {
        largestValue = A[index];
    }
}
console.log("Largest number is " + largestValue);


// Q10

var A = [24, 53, 2, 78, 91, 12, 3, 1,];
let smallValue = A[0]
for (let index = 0; index < A.length; index++) {
    if (smallValue > A[index]) {
        smallValue = A[index];
    }
}
console.log("Smallest number is " + smallValue);


// Q11

for (let index = 0; index < A.length; index++) {
    console.log("Array Items" + A[index])
}
console.log("Smallest number is " + smallValue);
console.log("Largest number is " + largestValue);

// Q12

for (let index = 5; index <= 100; index = index + 5) {
    console.log(index)
}

// Q13

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
var newArray = [];
for (let index = 0; index < students.length; index++) {
    newArray[index] = students[index] + " " + scores[index]
}
for (let index = 0; index < students.length; index++) {
    console.log(newArray[index])
}

// Q14

var scores = [12, 45, 3, 22, 34, 50];
var val = +prompt("12, 45, 3, 22, 34, 50", "Enter a number where you want to stop!")
for (let index = 0; index < scores.length; index++) {
    console.log(scores[index])
    if (val === scores[index]) {
        break;
    }
}

// Q15

var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (let index = 0; index < A.length; index++) {
    for (let i = 0; i < A.length; i++) {
        console.log(A[index][i])
    }
}

// Q16

var nums = +prompt("enter a number");
for (let index = 0; nums > 0; index++) {
    console.log(nums);
    nums = nums - 0.5;
}


// Q17

for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(index + " is even")
    } else {
        console.log(index + " is odd")
    }
}

// Q18

var odd = 1;
for (let index = 1; index <= 7; index++) {
    if (index % 2 === 0) {
    } else {
        odd = odd * index
    }
}
console.log("The product of the odd integers from 1 to 7 is " + odd)

// Q19

var line = +prompt("Enter Number of lines")
for (let index = line; index > 0; index--) {
    for (let i = 0; i < index; i++) {
        console.log("*")
    }
    console.log("\n")
}

// Q20

// a

var line = 5
for (let index = 0; index < line; index++) {
    for (let index = 0; index < line; index++) {
        console.log("*")
    }
    console.log("\n")
}

// b
var line = 5
for (let index = 1; index <= line; index++) {
    for (let i = 0; i < index; i++) {
        console.log("*")
    }
    console.log("\n")
}

// C


var line = 5;
for (let index = line; index > 0; index--) {
    for (let i = 0; i < index; i++) {
        console.log("*")
    }
    console.log("\n")
}