


// For login logout toggle
const users = JSON.parse(localStorage.getItem('users'))
// upper user k data liya agar user login hoto uska name show kren
const logged_In = JSON.parse(localStorage.getItem('logged_In'))
if (logged_In) { //agar login true too logout show krdo
    var link = document.getElementById("loginBtns");
    link.innerHTML = "Logout";
    var userName = document.getElementById("userName"); //user k name 
    userName.innerHTML = users[0].name
}
function Login() {
    var link = document.getElementById("loginBtns");
    if (link.innerHTML === "Login" && !logged_In) {
        window.location.href = "../login/login.html"
        link.innerHTML = "Logout";
    } else {
        Logout();
        link.innerHTML = "Login";
        userName.innerHTML = "Store ABC"
    }
}
function Logout() {
    localStorage.removeItem("logged_In") //logout hojao too localStorage sy true bhi khatm
    window.location.href = "../../index.html"
}
// For login logout toggle Up



async function gerProductDetail() {
    // in product details page
    // split("=") ye equal to k behalf sy value split kryga
    url = window.location.search.split("=")[1]//id mil gaye

    var data = await fetch("https://fakestoreapi.com/products/" + url);
    var products = await data.json()
    // console.log(url, products)
    setTimeout(() => {
        var loader = document.getElementById("loader");
        loader.className = "hide"
        var content = document.getElementById("content");
        content.className = " "
    }, 2000)
    var main = document.getElementById("main")
    //upper main ko target krliya
    var divCard = document.createElement("div")
    divCard.className = "card"
    //upper ab card k liye div bana hai or ishi me sb ab hongy

    // ab image/description bana kr k divCard k sath connect krna hai
    // ---------------down image

    var imgDiv = document.createElement("div")
    imgDiv.className = "img-container"
    var imgElement = document.createElement("img")
    imgElement.setAttribute("id", "cardImage")
    imgElement.style = "width:42%"
    imgElement.src = products.image
    imgDiv.append(imgElement)
    divCard.append(imgDiv)
    // ---------------

    // ab div banao jhn details hongi
    var divContainer = document.createElement("div")
    divContainer.className = "container"
    var h4 = document.createElement("h4");
    h4.setAttribute("id", "title");
    // h4.innerHTML = products.title.slice(0, 10)
    h4.innerHTML = products.title

    var descriptionElement = document.createElement("p");
    descriptionElement.setAttribute("id", "description");
    // descriptionElement.innerHTML = products.description.slice(0, 20);
    descriptionElement.innerHTML = products.description

    var priceElement = document.createElement("p");
    priceElement.setAttribute("id", "price");
    priceElement.innerHTML = "Price = " + products.price + "$";

    // divContainer me heading price or description add kro
    divContainer.append(h4)
    divContainer.append(descriptionElement)
    divContainer.append(priceElement)

    // ab image(upper connect hai)/description bana kr k divCard k sath connect krna hai
    divCard.append(divContainer);

    main.append(divCard) //now connect with main div
}

gerProductDetail()
