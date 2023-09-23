var classroom = {
    led: 2,
    light: 25,
    leds: 2,
    ac: 5,
    //prroperty:value
    //key:value
    //field:value
    projector: 1

}
console.log(classroom);
console.log(classroom.led);
classroom.led = 7;
console.log(classroom.led);
classroom.doors = 2;
console.log(classroom);
delete classroom.ac
console.log(classroom);


//array is a type of "Object"


// -------------------
// Array Return 
var car = ["civic", "audi", "corolla"]

var return1 = car.push("suzuki")
console.log(return1)

var return2 = car.unshift("mehran")
console.log(return2)

// push and unshift return new lenght of Array
var return1 = car.pop()
console.log(return1)

var return2 = car.shift()
console.log(return2)

// pop and shift    return outed "Value";


// -----------------x-object shallow copy deep copy // ye behaviour array k sath bhi hai

// 2 bhai or dono ko takleef jb kisi 1 ko takleef ho

var car1 = {
    name: "civic",
    color: "blue",
    brand: "suzuki",
}

var car2 = car1;//copy 

console.log(car2);
// Car2 object ko change kiya hai
car2.name = "Audi"
console.log(car2);

// Car1 object bhi change hoga
console.log(car1)


// dono k baap alag


var car2 = { ...car1 }  //spread operator
car1
car2
car2.name = "Culttus" // ab issue nhi hoga q k humne copy spread operator k kiya hai
car2
car1


var card = ["civic", "audi", "corolla"]
card2 = [...card];
card
card2
card2.push("boy")
card2
card



// -------------------x------------


// Array of Objects

var cars = [
    { name: "Cultus", model: "2023" },
    { name: "FX", model: "1995" },
    { name: "Civic", model: "1992" },
]
cars
for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i].name)
    if (cars[i].name == "FX") {
        cars[i].name = "ALTO"
    }
}
cars


// array k object k under items delete kro

var cars = [
    { name: "Cultus", model: 2023 },
    { name: "Mehran", model: 2021 },
    { name: "FX", model: 1995 },
    { name: "Civic", model: 1992 },
    { name: "swift", model: 2022 },
]
cars
do {
    check = false
    for (let i = 0; i < cars.length; i++) {
        debugger
        if (cars[i].model < 2000) {
            check = true
            // cars.splice(i, 1) ye is liye nhi use hoga q k loop ki length disturb hogaye wo next pe gaya hi nhi
            cars.splice(i, 1)
        }
    }
} while (check);
cars



