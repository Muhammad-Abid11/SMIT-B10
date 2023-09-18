function sum(num1, num2) {
    var op = prompt("enter operator")
    switch (op) {
        case "+":
            console.log(num1 + num2)
            break;

        case "-":
            console.log(num1 - num2)
            break;

        case "*":
            console.log(num1 * num2)
            break;

        case "/":
            console.log(num1 / num2)
            break;

        default:
            alert("Invalid")
            break;
    }
}
sum(2, 3)

// ---------------------x--------------

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function toss() {
    console.log('Match start hone wala hai, Chalo Toss krten hen')
    var toss = Math.round(Math.random())
    sleep(2000)
    if (toss == 0) {
        console.log("pakistan win hogya, chalo betting krten hen")
        var pakScore = innings("Pakistan");
        console.log("******************");
        sleep(5000);
        var indScore = innings("India", pakScore);
    } else {
        console.log("pakistan win hogya, chalo betting krten hen")
        var indScore = innings("India");
        console.log("******************");
        sleep(5000);
        var indScore = innings("Pakistan", indScore);
    }
}

function innings(team, target) {
    console.log(team + "is going to bat")
    var score = 0;
    var wickets = 0;
    var overs = 3;
    // loop label *_* 
    loop1: for (var i = 0; i < overs; i++) {
        console.log("Over " + (i + 1) + " started")
        // delay
        for (var j = 1; j <= 6; j++) {
            console.log("Over # ", i + "." + j);
            var runs = Math.round(Math.random()) * 6;
            if (runs == 0) {
                console.log("What a bolt!")
                wickets++;
                if (wickets === 3) {
                    console.log("*************")
                    console.log("All Out!")
                    console.log("*************")
                    if (target) {
                        console.log(team + "loss the match by " + (target - score) + " runs");
                    } else {
                        console.log(team + "has given the target of " + (score + 1) + " runs.");
                    };
                    break loop1; //Loop break 
                    // https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript
                }
            } else {
                console.log(runs + " runss....")
                score += runs;
                if (score > target) {
                    console.log(team + "Won the match by " + (3 - wickets) + " wickets");
                    break loop1;
                }
            }
            sleep(2000);
        }
        console.log(team + ": " + score + "/" + wickets);
        sleep(4000);
        // delay
    }
    if (target) {
        if (target === score) {
            console.log("Match has tied!");
        } else {
            console.log(team + "loss the match by " + (target - score) + " runs");
        }
    } else {
        console.log(team + " has given the target of " + (score + 1) + " runs.");
    }
    return score;
}





