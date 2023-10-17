var questions = ""
var count = 0
var score = 0
async function start() {
    var response = await fetch("https://opentdb.com/api.php?amount=10")
    response = await response.json();
    questions = response.results
    var header = document.getElementById("header");
    header.className = "hide"
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.className = ""
    // ----question create down
    render()
}
function render() {
    var title = document.getElementById("title");
    title.innerHTML = questions[count].question
    var questionOption = document.getElementById("questionOption");
    questionOption.innerHTML = "";
    var option = questions[count].incorrect_answers
    option.push(questions[count].correct_answer)
    option = shuffle(option)

    console.log(questions[count].correct_answer)
    for (let i = 0; i < questions[count].incorrect_answers.length; i++) {
        var inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "questionOptions";
        inputElement.value = option[i];
        questionOption.append(inputElement)
        questionOption.append(inputElement.value)
    }
}

function next() {
    var inputChecked = document.getElementsByName("questionOptions")
    for (let i = 0; i < inputChecked.length; i++) {
        // console.log(inputChecked[i].checked, inputChecked[i].value)
        if (inputChecked[i].checked == true && inputChecked[i].value == questions[count].correct_answer) {
            score++
            console.log("scoe--->", score)
        }
    }
    count++
    if (count < questions.length) {
        render()
    } else {
        result()
    }
}

function result() {
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.className = "hide"
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.className = ""
    var scores = document.getElementById("score");
    scores.innerHTML = score
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}