const users = JSON.parse(localStorage.getItem('users')) || []
const logged_In = JSON.parse(localStorage.getItem('logged_In'))
if (logged_In) {
    // window.location.replace('../../login.html')
    window.location.replace('../dashboard/dashboard.html')
}

// const users = []
//agar local storage me value ho to wahn sy loa value hoye too ->true 
// or false aye too agy ja k khali array save krdo 


function onSignup() {
    const allInputs = document.getElementsByTagName("input")
    const fullname = allInputs[0].value
    const email = allInputs[1].value
    const password = allInputs[2].value
    const confirmPassword = allInputs[3].value

    if (!fullname || !email || !password || !confirmPassword) {
        alert("Please fill all the inputs!")
        return // ta k agy nhi jaye
    }
    if (fullname.length === 1) {
        alert("enter your fullname atleast 2 letters")
    }
    if (email.trim().indexOf(" ") !== -1) {
        alert("No spaces allowed in address");
        return;
    }
    if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
        alert("Please correct email address");
        return;

    }
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!(email.match(regex))) {
        alert("Please correct email address");
        return

    }
    //password length condition

    if (password !== confirmPassword) {
        alert('Password is not matchable with confirm password!')
    }

    // sign ka form submit hojayega
    // localstorage                 --->k data hamesha rehta hai. PC k browser k storage me save hoti hai
    // session storage (temp storage)--> ye 1 session tk data rekhyga. Jb tk apka tab open hai laken refresh pe nhi jayega
    // tab ya browser k close pe session storage gaya

    /* 
    
        // localStorage.setItem (key ,value) key--> string,  value--> string|||array
        localStorage.setItem("users", "hello users",)
        localStorage.getItem("users")
    
        var datas = [
            { name: "abc" },
            { name: "xyz" }
        ]
        // localStorage.setItem("users",datas)
        //upper array of object ko wo read nhi krta hamen JSON.stringify me dyna hoga
        localStorage.setItem("users", JSON.stringify(datas));
        // or get krty hoa JSON.parse krna hoga
        var getData = localStorage.getItem("users", JSON.parse(datas));
     
        setItem(): Add key and value to localStorage
        getItem(): This is how you get items from localStorage
        removeItem(): Remove an item from localStorage
        clear(): Clear all data from localStorage
        key(): Passed a number to retrieve the key of a localStorage
     
        */

    const data = {
        name: fullname,
        password: password,
        email: email
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users)) //users k name ki "key" and "value" me array push krdo
    alert('Registered Successfully!')


    for (var i = 0; i < allInputs.length; i++) {
        allInputs[i].value = ''
    }
    // window.location.href = './src/dashboard/index.html'

    window.location.href = "../../login.html"
}