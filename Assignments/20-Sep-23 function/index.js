// 1
function body() {

}
body()

// 2

function body() {
    console.log(new Date())
}
body()

// 3

var name1 = prompt("Enter First Name");
var name2 = prompt("Enter Second Name");
function body(name1, name2) {
    console.log("Welcome " + name1 + " " + name2);
}
body(name1, name2)

// 4

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
function sum(num1, num2) {
    var result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
}
sum(num1, num2)

// 5


var num1 = +prompt("Enter number 1 ");
var num2 = +prompt("Enter number 2 ");
var operator = prompt("Enter operator  ");
function operation(num1, num2, operator) {
    switch (operator) {
        case "+":
            var result = num1 + num2;
            console.log(num1 + " + " + " " + num2 + " = " + result);
            break;
        case "-":
            var result = num1 - num2;
            console.log(num1 + " - " + " " + num2 + " = " + result);
            break;
        case "*":
            var result = num1 * num2;
            console.log(num1 + " * " + " " + num2 + " = " + result);
            break;
        case "/":
            var result = num1 / num2;
            console.log(num1 + " / " + " " + num2 + " = " + result);
            break;

        default:
            console.log("invalid")
            break;
    }
}
operation(num1, num2, operator)

// 6

var num1 = +prompt("Enter First Number");
function square(num1) {
    console.log("Square of Number" + num1 + " is " + num1 ** num1);
}
square(num1)

// 7

var num1 = +prompt("Enter First Number");
var multiple = 1;
function factorial(num1) {
    if (num1 > 0) {
        multiple = multiple * num1
        num1--
        factorial(num1)
    }
}
factorial(num1)
console.log(multiple)

// 8

var num1 = +prompt("Enter Start Number")
var num2 = +prompt("Enter End Number")
for (let index = num1; index <= num2; index++) {
    console.log(index)
}

// 9

function calculateHypotenuse(sideA, sideB) {
    return Math.sqrt(sideA * sideA + sideB * sideB);
}

const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);

console.log(`The hypotenuse of the right triangle is: ${hypotenuse}`);

// 10

function writeArguments(...args) {
    console.log(args.length);
}

writeArguments('Hello', 'world!', 42, true);

// 11

function findLarge(...args) {
    for (let i = 0; i < args.length; i++) {
        if (args[i] > args[i + 1]) {
            [args[i], args[i + 1]] = [args[i + 1], args[i]]
        }
    }
    console.log(args.at(-1))
}

findLarge(1, 2, 3, 4, 11, 9, 10, 15);

// 12

var height = +prompt("Enter Height of Rectangle")
var width = +prompt("Enter width of Rectangle")
function area(height, width) {
    console.log("Area of " + height + " * " + width + " = " + height * width);
}
area(height, width);

// 13


function sortArray(...args) {
    console.log("Array " + args)
    for (let i = 0; i < args.length; i++) {
        if (args[i] > args[i + 1]) {
            [args[i], args[i + 1]] = [args[i + 1], args[i]]
        }
    }
    console.log("Sorted Array " + args)
}

sortArray(1, 2, 3, 4, 11, 9, 10, 15, 22, 33, 13);   //error not correct sort array




// 13--Internet

function sortArray(...args) {
    console.log("Array " + args);
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < args.length - 1; i++) {
            if (args[i] > args[i + 1]) {
                [args[i], args[i + 1]] = [args[i + 1], args[i]];
                swapped = true; //update krdiya hai phir sy check kro q k true hai

            }
        }
    } while (swapped);//false hoga to loop render nhi hoga or ye us waqt hoga jb loop k "if" false ho

    console.log("Sorted Array " + args);
}

sortArray(1, 2, 3, 4, 11, 9, 10, 15, 22, 33, 13);


// Internet sort 

// 14

function sum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}
var numbers = [1, 2, 3, 4, 8, 12];
sum(numbers)

// 15

var param = function inner() {
    return typeof inner;
}
console.log(param());

// 16

var num1 = +prompt("Enter Number")
var num2 = +prompt("Enter its power")
function pow(num1, num2) {
    console.log(num1 + "^" + num2 + " = " + num1 ** num2)
}
pow(num1, num2)

// 17


function dics() {
    return Math.ceil(Math.random() * 6)
}
dics()


// 18

var num1 = prompt("Enter Number") //yhn 1 important hai number mane string me liya hai warna
function reverse(num1) {
    var reverseNum = ""
    for (let i = num1.length - 1; i >= 0; i--) {
        reverseNum = reverseNum + num1[i]; //warna number hoga too num1[i] work nhi kryga
    }
    return reverseNum;
}
reverse(num1)

// 19

var word = prompt("Enter a word to check Paradrom")
function paradrom(word) {
    var alterWord = ""
    for (let index = word.length - 1; index >= 0; index--) {
        alterWord += word[index]
    }
    return word === alterWord
}
paradrom(word)

// 20 internet

function capitalizeFirstLetterOfEachWord(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }
    const resultString = capitalizedWords.join(' ');
    return resultString;
}

const inputString = 'the quick brown fox';
const outputString = capitalizeFirstLetterOfEachWord(inputString);
console.log(outputString);

//21

var string = "Web Development Tutorial"

function largeWord(string) {
    var words = string.split(" ")
    var largeWord = "";
    var maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            largeWord = words[i];
        }
    }
    console.log(largeWord)
}

largeWord(string);

//22


function Vowel(word) {
    var count = 0;
    for (let index = 0; index < word.length; index++) {
        if (word[index] == "a" || word[index] == "e" || word[index] == "i" || word[index] == "o" || word[index] == "u") {
            count++;
        }

    }
    console.log("its have " + count + " vowels")
}
Vowel("hello world")


// 23

var word = prompt("Enter a Word to its Data type")
function typeChecker(word) {
    switch (typeof word) {
        case "string":
            console.log(word + " is a " + typeof word);
            break;
        case "object":
            console.log(word + " is a " + typeof word);
            break;
        case "boolean":
            console.log(word + " is a " + typeof word);
            break;
        case "function":
            console.log(word + " is a " + typeof word);
            break;
        case "undefined":
            console.log(word + " is a " + typeof word);
            break;

        default:
            break;
    }
}
typeChecker(word)


// 24

var string = prompt("Enter a string value")
var letter = prompt("Enter a letter to search on it")
function search(string, letter) {
    var count = 0;
    for (let i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            count++;
        }
    }
    console.log("'" + string + "' contain '" + letter.toUpperCase() + "' " + count + " times")
}
search(string, letter)


// 25

