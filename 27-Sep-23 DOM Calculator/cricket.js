function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function toss() {
  console.log(
    "Aah... Today we are in Srilanka, barish hochuki. Ab match start hoga! Aao Toss karen!"
  );

  var toss = Math.round(Math.random());

  sleep(2000);

  if (toss == 0) {
    console.log("Pakistan won the toss, and elected to bat");

    var pakScore = innings("Pakistan");
    console.log("******************************************");
    sleep(5000);
    var indScore = innings("India", pakScore);
  } else {
    console.log("India won the toss, and elected to bat");

    var indScore = innings("India");
    console.log("******************************************");
    sleep(5000);
    var pakScore = innings("Pakistan", indScore);
  }
}

function innings(team, target) {
  console.log(team + " is going to bat.");

  var score = 0;
  var wickets = 0;
  var overs = 3;

  overLoop: for (var i = 0; i < overs; i++) {
    console.log("Over " + (i + 1) + " started");

    for (var j = 1; j <= 6; j++) {
      console.log("Ball " + i + "." + j);

      var runs = Math.round(Math.random() * 6);

      if (runs === 0) {
        console.log("OUTTTAAAAY! What a bold");
        wickets++;

        if (wickets === 3) {
          console.log("********");
          console.log("All out!");
          console.log("********");

          if (target) {
            console.log(
              team + " loss the match by " + (target - score) + " runs"
            );
          } else {
            console.log(
              team + " has given the target of " + (score + 1) + " runs."
            );
          }
          break overLoop;
        }
      } else {
        console.log(runs + " runs...");
        score += runs;

        if (score > target) {
          console.log(team + " won the match by " + (3 - wickets) + " wickets");
          break overLoop;
        }
      }

      sleep(2000);
    }

    console.log(team + ": " + score + " / " + wickets);
    sleep(4000);
  }

  if (target) {
    if (target === score) {
      console.log("Match has tied!");
    } else {
      console.log(team + " loss the match by " + (target - score) + " runs");
    }
  } else {
    console.log(team + " has given the target of " + (score + 1) + " runs.");
  }

  return score;
}
