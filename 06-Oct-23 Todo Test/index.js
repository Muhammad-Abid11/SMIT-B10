var currentEditValue = ""
function AddTodo() {
    var inputValue = document.getElementById("inputValue");
    var ulList = document.getElementById("list");
    var liElement = document.createElement("li")
    var EdtBtn = "<button onclick='edtbtn(event)'>Edit</button>"
    var DltBtn = "<button onclick='dltbtn(event)'>Delete</button>"
    liElement.innerHTML = "<span>" + inputValue.value + "</span>" + EdtBtn + DltBtn
    ulList.append(liElement)
    inputValue.value = ""
}
function deleteAll() {
    var ulList = document.getElementById("list");
    ulList.innerHTML = ""
}

var editValue = "" //for update use
function edtbtn(e) {
    var AddBtn = document.getElementById("AddBtn")
    var UpdateBtn = document.getElementById("UpdateBtn");
    AddBtn.className = "hide"
    UpdateBtn.className = " "

    // ..edit functionality Down
    var inputValue = document.getElementById("inputValue");
    console.log(e.target.previousSibling.innerHTML)
    inputValue.value = e.target.previousSibling.innerHTML
    editValue = inputValue.value
}
function UpdateTodo(e) {
    var AddBtn = document.getElementById("AddBtn")
    var UpdateBtn = document.getElementById("UpdateBtn");
    AddBtn.className = " "
    UpdateBtn.className = "hide"

    // ..update functionality Down
    var inputValue = document.getElementById("inputValue");
    editValue = inputValue.value
    // inputValue.value = ""
}
function dltbtn(e) {
    e.target.parentNode.remove()
}