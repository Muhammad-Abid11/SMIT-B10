const logged_In = JSON.parse(localStorage.getItem('logged_In'))
if (logged_In) {
    // window.location.replace('../../login.html')
    window.location.replace('./src/dashboard/dashboard.html')
}

function onLogin() {
    const allInputs = document.getElementsByTagName("input");
    const email = allInputs[0].value;
    const password = allInputs[1].value;

    const users = JSON.parse(localStorage.getItem("users")) //here arrray of ojbects receive
    console.log("data agaya--->", users)
    var found = false//flag
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            alert("Login Successfully")
            found = true
            window.location.href = './src/dashboard/dashboard.html'
            localStorage.setItem("logged_In", JSON.stringify("true")) //users k name ki "key" and "value" me array push krdo

            break;
        }
    }
    if (!found) {
        alert('Invalid Email/Password')

    }
}

function updateTheme(color) {
    const body = document.getElementsByTagName("body")[0];// body k array k 1st element
    body.className = color + "Theme"
    // body.className = `${color}-theme`

}
