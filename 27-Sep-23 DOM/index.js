function sum(a, b) {
    alert(a + b)
}

var input = ''

function getNum(num) {
    input += num

    var inputElement = document.getElementById('input')
    inputElement.value = input
}

function calculate() {
    var inputElement = document.getElementById('input')
    var value = inputElement.value
    var result = eval(value)
    inputElement.value = result

}

function cls() {
    var inputElement = document.getElementById('input')
    inputElement.value = ''
}