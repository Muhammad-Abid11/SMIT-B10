
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

// -------------------x------------


function dics() {
    return Math.ceil(Math.random() * 6)
}
dics()


// -------------------x------------



function alter(word) {
    return word = word.split("").reverse().toString()
}
console.log(alter("kashif"))

// -------------------x------------

function alter(word) {
    var alterWord = ""
    for (let index = word.length - 1; index >= 0; index--) {
        alterWord += word[index]
    }
    return alterWord
}
alter("kashif")


// -------------------x------------


function paradrom(word) {
    var alterWord = ""
    for (let index = word.length - 1; index >= 0; index--) {
        alterWord += word[index]
    }

    // return word === alterWord 
    if (word == alterWord) {
        console.log("its a Paradrom")

    } else {
        console.log("it is not a paramdrom")
    }
}
paradrom("kashif")


// --------------x-


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

// -----------------x-


