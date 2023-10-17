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

// for API and  loader idea nichy sb dummy hai
/*      
getData() //run directly    

function getData(){
    fetch("URL")
    .then((res)=>res.json)
    // .res((res)=>questions=res)// update questions array 
    .res((res)=>{
        questions=res
        var loadingElement=document.getElementById("loaderKiID");
        loadingElement.className = "hide"
        var startElement=document.getElementById("startKiID");
        startElement.className = ""
    })// update questions array 

}

    // option ki new array me incorrect or correct ko combine kr k 
    // internet sy suffling krdo array ko

 */
// ---------------


var count = 0;
function startQuiz() {
    var reset = document.getElementById("Reset");
    reset.className = " hide"
    var result = document.getElementById("Result");
    result.className = " hide"
    // console.log(event.target)
    var start = document.getElementById("start")
    start.className = "hide"
    var nextBtn = document.getElementById("nextBtn")
    nextBtn.className = " "

    // ....................................

    var quesTitle = document.getElementById("title");
    quesTitle.innerHTML = questions[count].title
    var option = document.getElementById("option");
    var input = document.createElement("input");
    input.value = "abc";
    input.type = "radio"  // type here through dom
    option.append(input)
}

function nextQues() {
    // NEXT K ander hum checked value ko check kren by tagName sy call kr k
    // or wo value ko compare kro correct answer sy or score upkrdo or ya too isy 1 function me enter krdo
    // or agy next question show hojayega 
    count++
    if (count < questions.length) {
        var quesTitle = document.getElementById("title");
        quesTitle.innerHTML = questions[count].title
    } else {
        result()
    }
}


function result() {
    var nextBtn = document.getElementById("nextBtn")
    nextBtn.className = "hide"
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.ClassName = "hide"
    var result = document.getElementById("Result");
    result.className = " "
    var score = 80
    result.append(score)
    var reset = document.getElementById("Reset");
    reset.className = " "
}

function restartQuiz() {
    count = 0
    score = 0
    startQuiz()
}