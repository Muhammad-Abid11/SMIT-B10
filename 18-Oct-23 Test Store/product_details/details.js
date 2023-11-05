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
