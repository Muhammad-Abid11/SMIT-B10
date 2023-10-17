var amount = 0;
function addRecord(type) {
    // .....Get Elements

    var Pname = document.getElementById("ProjectName")
    var Pamount = document.getElementById("amount")
    console.log("pname", Pname.value)
    console.log("pamount", Pamount.value)
    if (Pamount.value == null && Pname.value == null) {
        alert("Input Field Empty")
    } else {

        // ..... create Elements and setting values
        var trElement = document.createElement("tr")
        var tdElement1 = document.createElement("td")
        tdElement1.append(Pname.value);
        var tdElement2 = document.createElement("td")
        tdElement2.append(Pamount.value);
        var tdElement3 = document.createElement("td")
        tdElement3.append(type)

        //  connect with tr
        trElement.append(tdElement1)
        trElement.append(tdElement2)
        trElement.append(tdElement3)

        //for data enter between tableHead and result
        var tableBody = document.getElementById("tableBody");
        tableBody.append(trElement);

        // ....... Total amount 
        if (type == "Income") {
            amount += +Pamount.value
        } else {
            amount -= +Pamount.value
        }

        //  table unhide down
        var resultTable = document.getElementById("resultTable")
        resultTable.className = ""
        var totalAmount = document.getElementById("totalAmount");
        totalAmount.innerHTML = amount
        console.log("totalAmount-->", totalAmount.innerHTML)
    }
}

