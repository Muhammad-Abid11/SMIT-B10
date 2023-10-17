var questions = [
    {
        title: 'What is HTML',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
]
var count = 0;
var score = 0;

countDown = 30;
var myCounter = ""  //global is liye ta k counter ko result sy bhi stop kr saken
//agar result pe user chaly jaye tb bhi setInterval ko clear krna hoga t k restart me timer taiz nhi ho
var data = ""   // ta k sb function me access hojaye
async function start() {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const fetchQuestions = await response.json();
    data = fetchQuestions;  //save to global variable
    // console.log("data-->", data.results)
    // console.log(fetchQuestions.results[0].question);
    // var fetchQuestion = document.getElementById('fetchQuestion');
    // fetchQuestion.innerHTML = fetchQuestions.results[count].question

    var timer = document.getElementById("timer");
    myCounter = setInterval(() => {
        console.log(countDown)
        countDown--
        timer.innerHTML = countDown
    }, 1000)
    setTimeout(() => {
        // console.log("me chala")
        clearInterval(myCounter)
        result()
    }, 30000)
    var header = document.getElementById("header")
    header.className = "hide"
    // ------

    renderQuestion()
}

function next() {
    var inputChecked = document.getElementsByName("quizOption")
    // console.log(inputChecked[count].checked)
    for (let i = 0; i < inputChecked.length; i++) {
        // console.log(inputChecked[i].checked,inputChecked[i].value)
        if (inputChecked[i].checked == true) {
            // console.log("yee hai checked",inputChecked[i].checked)
            // console.log("yee hai checked",inputChecked[i].value)
            if (questions[count].correctAnswer == inputChecked[i].value) {
                score++
            }
        }
    }
    count++
    if (count < questions.length) {
        renderQuestion()
    } else {
        result();
    }
}

function result() {
    clearInterval(myCounter)
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.className = "hide"
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.className = " "
    var scores = document.getElementById("score");
    scores.innerHTML = score * 100 / questions.length + "%"
}

function renderQuestion() {
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.className = "hide"
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.className = " "
    var questionTitle = document.getElementById("questionTitle");
    // questionTitle.innerHTML = questions[count].title //for direct 
    questionTitle.innerHTML = data.results[count].question //for json
    var questionOptions = document.getElementById("questionOptions")
    questionOptions.innerHTML = ""
    // for (let i = 0; i < questions.length; i++) { //for direct
    //nichy option me sirf wrong option ayen hen q k json ki api me wrong ki array hai. correct ki nhi 
    // too abhi correct k kam nhi hua too scoring bhi nhi hogi 
    for (let i = 0; i < data.results[count].incorrect_answers.length; i++) {    // for json
        var inputElement = document.createElement("input")
        inputElement.type = "radio"
        inputElement.name = "quizOption"
        inputElement.value = data.results[count].incorrect_answers[i]
        // var liElement=document.createElement("li")
        // liElement.append(questions[count].options[i])
        // console.log(liElement)
        questionOptions.append(inputElement)
        questionOptions.append(inputElement.value)
    }
}
function restartss() {
    score = 0;
    count = 0;
    countDown = 30;//for countdown from 30
    start()

}


