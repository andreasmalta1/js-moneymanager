var formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR'
})

var table = document.getElementById("expenseTable");

function getData(){
    var expense = document.getElementById("expense").value;
    var date = document.getElementById("date").value;
    var price = document.getElementById("amount").value;
    price = formatter.format(price)
    
    console.log(date)
    console.log(price)
    console.log(expense)

    // if (!date || !expense || !price == ""){
    //     alert("Please Fill All Required Fields");
    //     return
    //   }

    deleteFirstRow(table);
    addRow(table, expense, date, price);

}

function deleteFirstRow(table){
    if (table.rows[1]){
        firstRow = table.rows[1].cells[0].innerHTML;
        if (firstRow == "No Expense Yet"){
            console.log("True");
            table.deleteRow(1);
            console.log("Deleted")
        }
    }
    
}

function addRow(table, expense, date, price){
    var btn = document.createElement('button');
    btn.className = "btn"
    btn.innerText = 'X'
    btn.onclick = function(){
        btn.parentElement.parentElement.remove()
        return;
    }


    table.appendChild(tr=document.createElement("tr"));
    tr.appendChild(td=document.createElement("td"));
    td.innerHTML = expense;
    tr.appendChild(td=document.createElement("td"));
    td.innerHTML = date;
    tr.appendChild(td=document.createElement("td"));
    td.innerHTML = price;
    tr.appendChild(td=document.createElement("td"));
    td.appendChild(btn);
}

function orderDate(){
    if (table.tBodies[0].rows.length > 2){
        console.log('Hello')
    }
}

// Add stuff
// Empty fields afeter submit
// check if you can order
// Make buttons to order by diff stuff