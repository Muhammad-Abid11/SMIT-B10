var text = null;
function checkText() {
    var text = "Hello World" //ye new variable hai local
    console.log("inside text", text)
}
console.log("outside text 1", text)
checkText();
console.log("outside text 1", text)


// string to number

Number("3.142")
parseInt("2.345")//2
parseFloat("2.345")//2.345

// Number to string

var t = 32;
t.toString();//"32"

t + "";   //"32"

// toFixed() -> it change number to string;

var num = 123.323323
num.toFixed(3);

// Date

new Date();
// ---------

new Date("10 3 1998")
// ---------
var date = new Date()
date.getDate();
date.getDay();
// ---------

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"];
days[date.getDay()]
// ---------
date.getMonth()

// -------

Date.now()// both are same

var date = new Date()
date.getTime()// both are same

// ----------
