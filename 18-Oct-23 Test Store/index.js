// https://fakestoreapi.com/products 


// For login logout toggle
const users = JSON.parse(localStorage.getItem('users'))
// upper user k data liya agar user login hoto uska name show kren
const logged_In = JSON.parse(localStorage.getItem('logged_In'))
if (logged_In) {//agar login true too logout show krdo
    var link = document.getElementById("loginBtns");
    link.innerHTML = "Logout";
    var userName = document.getElementById("userName"); //user k name 
    userName.innerHTML = users[0].name
}
function Login() {
    var link = document.getElementById("loginBtns");
    if (link.innerHTML === "Login" && !logged_In) {
        window.location.href = "./src/login/login.html"
        link.innerHTML = "Logout";
    } else {
        Logout();
        link.innerHTML = "Login";
        userName.innerHTML = "Store ABC"

    }
}
function Logout() {
    localStorage.removeItem("logged_In")
    window.location.href = "./index.html"
}
// For login logout toggle Up



// var count = 0
async function getData() {
    var data = await fetch("https://fakestoreapi.com/products");
    var products = await data.json()
    // console.log(products[count])
    // down render products
    // ------hide loader and display content
    setTimeout(() => {
        var loader = document.getElementById("loader");
        loader.className = "hide"
        var content = document.getElementById("content");
        content.className = " "
    }, 2000)
    for (let i = 0; i < products.length; i++) {

        var main = document.getElementById("main")
        //upper main ko target krliya
        var divCard = document.createElement("div")
        divCard.className = "card"

        divCard.onclick = function () {
            // yhn humne query param"?""  use kiya hai 
            //? k bad "productid" ye 1 variable hai jis me  
            window.location.href = "./src/product_details/details.html?productid=" + products[i].id
        }
        //upper ab card k liye div bana hai or ishi me sb ab hongy

        // ab image/description bana kr k divCard k sath connect krna hai
        // ---------------down image
        var imgElement = document.createElement("img")
        imgElement.setAttribute("id", "cardImage")
        imgElement.style = "width:100%"
        imgElement.src = products[i].image
        // console.log(imgElement)
        divCard.append(imgElement)
        // ---------------

        // ab div banao jhn details hongi
        var divContainer = document.createElement("div")
        divContainer.className = "container"
        var h4 = document.createElement("h4");
        h4.setAttribute("id", "title");
        h4.innerHTML = products[i].title.slice(0, 10)
        // console.log(h4)

        var descriptionElement = document.createElement("p");
        descriptionElement.setAttribute("id", "description");
        descriptionElement.innerHTML = products[i].description.slice(0, 20);
        // console.log(descriptionElement)

        var priceElement = document.createElement("p");
        priceElement.setAttribute("id", "price");
        priceElement.innerHTML = products[i].price + "$";
        // console.log(priceElement)

        // create addCartBtn
        var addCartBtn = document.createElement("button");
        addCartBtn.innerHTML = "Add to Cart"
        addCartBtn.className = "addBtn"

        // divContainer me heading price or description add kro
        divContainer.append(h4)
        // divContainer.append(descriptionElement)
        divContainer.append(priceElement)
        // console.log(divContainer)

        // ab image(upper connect hai)/description bana kr k divCard k sath connect krna hai
        divContainer.append(addCartBtn)
        divCard.append(divContainer);
        // console.log(divCard)

        main.append(divCard) //now connect with main div
    }

    // ---------------
    /*     var cardImage = document.getElementById("cardImage");
        cardImage.src = products[count].image
        var title = document.getElementById("title");
        title.innerHTML = products[count].title.slice(0, 10)//slice use for short name
        var description = document.getElementById("description");
        description.innerHTML = products[count].description
        var price = document.getElementById("price");
        price.innerHTML = products[count].price */

}
getData()