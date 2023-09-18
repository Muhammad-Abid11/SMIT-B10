// slice---> copy

// slice(firstIndex,final)

// slice(2,5) 2,3,4 values come 5 not


var array = ["name1", "name2", "name3", "name4", "name5"];
console.log(array.slice(2, 5));


// For loop----------> repeative

for (var i = 0; i < 10; i++) {
    console.log(i)
}


var biry = ["Nadeem Biryani", "Ahmed Biryani", "Ali Biryani"]
var usename = "Nadeem Biryani"
for (var i = 0; i < biry.length; i++) {
    if (biry[i] === usename) {
        console.log("Mazeedar", i)
    } else {
        console.log("Mazeedar nhi ", i)
    }
}



var memes = ["Kesa diya", "Bohat acha"];

for (var i = 0; i < memes.length; i++) {
    console.log("memes:", memes[i])
}
for (var i = 0; i < memes.length; i++) {
    console.log("memes k " + i + " index me ye value hai " + memes[i])
}


for (var i = 1; i <= 15; i++) {
    console.log(i)
}
// Even
for (var i = 0; i <= 15; i = i + 2) {
    console.log(i)
}
// Even
for (var i = 0; i <= 15; i += 2) {
    console.log(i)
}
// ODD
for (var i = 1; i <= 15; i += 2) {
    console.log(i)
}

