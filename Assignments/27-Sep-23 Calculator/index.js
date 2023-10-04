var values = "";
var cleaned = true
function btnValue(Number) {
    if (!cleaned) {
        var inputValues = document.getElementById('inputs')
        inputValues.value = "";
        cleaned = true
    }
    values += Number
    var inputValues = document.getElementById("inputs")
    inputValues.value += Number
}

function cls() {
    var inputValues = document.getElementById('inputs')
    inputValues.value = "";
}

function Cal() {
    var inputValues = document.getElementById('inputs')
    var result = eval(inputValues.value)
    inputValues.value = result;
    cleaned = false
}