/* 
1. global vs local variables
function under change kren to bahir kya hoga

2. array methods

3.object refrence(jurwan bhai shahrukh khan / Salman khan film)

4. for while doWhile(Difference)

5.function and Nested function

 */


/* 
false values 6
""
undefined
null
false
0
NaN
 */


/* 06-Dec-2023

// Library(Home)
    ye hamen features dyti hai.or rules per pabandi nhi krta 
    e.g React,JQuery
    
// FrameWork(Saylani)
    Pabandi wala environment.
    e.g Angular,Vuejs (Angular/Vuejs k kuch rules ko follow kiye bagar ap APP bana hi nhi sakty)
    Easa Project jinko Rules Follow kr k Scope k ander kam kry



    
    

*/


// --------------------x-----------

// Async code always work at the end of Sync code
console.log("1")
setTimeout(() => {
    console.log("2")
}, 0)
console.log("3")


let num1 = 10;
if (true) {
    let num1 = 5;
    console.log(num1)//5
}
console.log(num1)//10


var num2 = 10;
if (true) {
    var num2 = 5;
    console.log(num1)//5
}
console.log(num1)//5

// --------------------x-----------


/* Difference between arrow and normal function */
// There are three main types of functions in JavaScript:
//  named functions, anonymous functions, and arrow functions

// Example 1
/* 

regularFunction(); // Works because of function hoisting
function regularFunction() {
  console.log('Regular function');
}

// This would throw an error because arrow functions are not hoisted
arrowFunction(); 
const arrowFunction = () => {
  console.log('Arrow function');
};

*/


// Example 2 by GPT

function regularFunction() {
    console.log(this); // Refers to the caller of the function
    console.log(arguments); // Contains the arguments passed to the function
}

const arrowFunction = () => {
    console.log(this); // Refers to the parent context's this
    // No arguments object in arrow functions
};

// Calling regular function with context
regularFunction.call({ name: 'John' }, 1, 2, 3);

// Arrow function accessing this from parent context
const obj = {
    name: 'Jane',
    arrowFunc: arrowFunction
};
obj.arrowFunc();


// since "arguments" is not used in ES6 arrow function so spread operator used their 
showArgs2 = (...args) => {
    console.log("arguments in 2nd object: ", args);
    return `${args[0]} ${args[1]}`;
}
showArgs2("hello", "world");

// --------------------x-----------
// What are Higher-Order Functions?
// A Higher - Order Function is a regular function that takes one or 
// more functions as arguments and / or returns a function as a value from it.

// example 1
function getCapture(camera) {//camera body receive
    camera();   //call here
}

getCapture(function () {  //camera body pass
    console.log('Canon');
});

// example 2
function returnFunc() {
    return function () {
        console.log('Hi');
    }
}
const fn = returnFunc();
fn(); //Hi
returnFunc()(); //Hi


// --------------------x-----------

//Function Scope
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("final", i); // returns final 5
}
// block Scope
function loop2() {
    for (let i = 0; i < 5; i++) {
        // can access i here
        console.log("final", i);
    }
    console.log("final", i); // returns an error here due to "let"
}

// --------------------x-----------
/*
Callback Function:?
A callback function is a function that is passed as an argument to another function and is intended 
to be called within that function at a later time or upon a certain event.

 */

function doSomethingAsync(callback) { //doSomethingAsync is a higher order function
    setTimeout(function () {
        callback('Operation finished');
    }, 1000);
}
function callbackFunction(message) {
    console.log(message);
}
doSomethingAsync(callbackFunction); // Pass callbackFunction as a callback


// In summary, callbacks are functions passed as arguments to be executed later, often
// used for handling asynchronous operations, while higher - order functions
// either take functions as arguments or return functions, allowing for more flexible and abstract code.

// --------------------x-----------

const print = console.log;
print("hello,world2");
