const users = JSON.parse(localStorage.getItem('users')) || []



// agar login huawa ho to is per nhi aye
const logged_In = JSON.parse(localStorage.getItem('logged_In'))
if (logged_In) {
    // window.location.replace('../../login.html')
    window.location.replace('../../index.html')
}

function onLogin() {
    const allInputs = document.getElementsByTagName("input");
    const email = allInputs[0].value;
    const password = allInputs[1].value;

    const users = JSON.parse(localStorage.getItem("users")) //here arrray of ojbects receive
    // console.log("data agaya--->", users)
    var found = false//flag
    if (!users) {
        alert('Not Users Found')
        return
    }
    else {

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                alert("Login Successfully")
                found = true
                window.location.href = '../../index.html'
                localStorage.setItem("logged_In", JSON.stringify("true")) //users k name ki "key" and "value" me array push krdo

                break;
            }
        }

        if (!found) {
            alert('Invalid Email/Password')

        }
    }
}
