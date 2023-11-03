var a = "abid"
a

foo = () => {
    setTimeout(() => console.log("a"), 3000);
    console.log("b");
    setTimeout(() => console.log("c"), 1000);
    console.log("d");
}
foo()






// let arr=["a","b","c","d","a"];
/* 
write a JS program, the output should be like this

obj = {
    a: 2,
    b: 1,
    c: 1,
    d: 1
}
 */




function countOccurrences(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        obj[element] = (obj[element] || 0) + 1;
    }
    return obj;
}

const arr = ["a", "b", "c", "d", "a"];
const result = countOccurrences(arr);
console.log(result);


/* check output1

function do11() {
    var list =["alo","piyaz"]
    list.push("aa");
    do2()
}
function do2() {
    list.pop()
    return list
}
var result=do11()


*/

/* check output2

function do11() {
    var list =["alo","piyaz"]
    list.push("aa");
    do2(list)
}
function do2(list) {
    list.pop()
    return list
}
var result=do11()


*/
// --------------- create dynamice key value javascript

var a = "name"
var value = "sajid"
const obj1 = {  //dynamic key value
    [a]: value
}

var obj2 = { //not dynamic 
    a: value
}


// another example by GPT 

const myArray = [];
function createObjectAndPushToArray(name, value, array) {
    const obj = { [name]: value };
    array.push(obj);
}
createObjectAndPushToArray("age", 25, myArray);
createObjectAndPushToArray("name", "John", myArray);
console.log(myArray); // Output: [ { age: 25 }, { name: 'John' } ]



// ---------------------x--------------
//chapter 50 onwards


/* in DOM adding extra class without remove existing classes B 164



If you want to add a class to an element, preserving its existing classes, you can do it. For
example, suppose you have a paragraph with a class that styles it in Verdana, size 1 em. When
the user mouses over it, you want to double its size to 2 em. But you don't want to lose the
Verdana styling of its original class. Rather than replace the class that styles it in Verdana, you
want to retain that class and add the class that enlarges the font. Let's say the element has the id
164
"p1". This is the function.
1 function makeBig() {
2 document.getElementById("p1").className += " big";
3 }
Compared with the code that replaces all the existing classes with a new one, this code
has two small differences.
It's += instead of just =.
A space before the class name is required.

*/


// read chapt 53 swapping images


/*
<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"> //<----1st

Another way to do it is to call a function that makes the swap. This is the markup:

<img src="before-pic.jpg" id="before" onMouseover="swapPic();">

 function swapPic() {
 document.getElementById("before").src = "after-pic.jpg";
 }

*/


// 54 Swapping images and setting classes

/* 
1 function swapPic() {
2 var pic = document.getElementById("before");
3 pic.src = "after-pic.jpg";
4 }

1 function getAddress() {
    2 var link = document.getElementById("link1");
    3 var address = link.href;
    4
}
 */


/* 
55 Setting styles

1 function makeBig() {
2 document.getElementById("p1").className += " big";
3 }
There's another way to specify style properties.
1 function makeBig() {
2 document.getElementById("p1").style.fontSize = "2em";
3 }


document.getElementById("div9").style.visibility = "hidden";

document.getElementById("mainPic").style.margin = "0 10px 0 10px;";
*/




/* 
56 Target all elements by tag name---> its return an array containning elements

<p>This bed is too small.</p>
<p>This bed is too big.</p>
<p>This bed is just right.</p>


var par = document.getElementsByTagName("p");
var textInMiddleParagraph = par[1].innerHTML;
par[1].innerHTML = "This SUV is too big.";

    or

1 for (var i = 0; i < par.length; i++) {
2 par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
3 }


*/





/* 
object  k chapter ko book me revise kro lazmi

 */



/* 76 Browser control:
Getting and setting the URL 

 window.location.href;               //'https://www.google.com/' 
 window.location.hostname;          //'www.google.com'
 window.location.pathname;           // root "/"
 window.location.hash               //koye particualr id in "daraz" ya "olx"
 window.location.href = "http://www.fb.com";
 window.location.href = "http://www.me.com/1.html#section9"; //is page k 1 particular location pe jao 

 */


/*
77
 
window.location.href = "http://www.fb.com";
   or
window.location.assign("http://www.fb.com");


window.location.replace("http://www.fb.com");
//agar ap 1st google pe jayen 2nd olx per  then agar ap replace ki 
command sy fb per jayen too back ane pe ap olx per nhi jayengy bulky google pe ayengy


window.location.reload(true);
window.location.reload(false);
window.location.reload();
All three statements reload the current page. If the argument is true (example 1 above),
the statement forces the browser to load the page from the server. If the argument is false
(example 2) or if there is no argument (example 3), the browser will load the page from the
cache if the page has been cached.


*/


/* 
78 Browser control:
Forward and reverse

history.back();
history.forward();

pressing the Backspace key three times.
history.go(-3);

forward two URLs.
history.go(2)

history.back();
...is the same as...
history.go(-1);

history.forward();
...is the same as...
history.go(1)

*/


/* 
79 Browser control:
Filling the window with content


window.open(); //open new black page


var monkeyWindow = window.open("http://www.animals.com/capuchin.html");

monkeyWindow.close();
*/


/* 80 Browser control:
Controlling the window's size and location



var monkeyWindow = window.open("monk.html", "win1") //open new tab 
var monkeyWindow = window.open("monk.html", "win1", "width=420,height=380"); //open new tab with particular size
var w = window.open("", "", "width=420,height=380,left=200,top=100"); //screen position


*/