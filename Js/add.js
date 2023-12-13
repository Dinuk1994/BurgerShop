var n = 1;
var x = 0;

function addRow() {
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];
    var list6 = [];

    list1[x] = document.getElementById("txtCode").value;
    list2[x] = document.getElementById("txtName").value;
    list3[x] = document.getElementById("txtPrice").value;
    list4[x] = document.getElementById("txtDis").value;
    list5[x] = document.getElementById("txtExp").value;
    list6[x] = document.getElementById("txtQty").value;

   
    localStorage.setItem("list1", JSON.stringify(list1));
    localStorage.setItem("list2", JSON.stringify(list2));
    localStorage.setItem("list3", JSON.stringify(list3));
    localStorage.setItem("list4", JSON.stringify(list4));
    localStorage.setItem("list5", JSON.stringify(list5));
    localStorage.setItem("list6", JSON.stringify(list6));

   
    var retrievedList1 = JSON.parse(localStorage.getItem("list1"));
    var retrievedList2 = JSON.parse(localStorage.getItem("list2"));
    var retrievedList3 = JSON.parse(localStorage.getItem("list3"));
    var retrievedList4 = JSON.parse(localStorage.getItem("list4"));
    var retrievedList5 = JSON.parse(localStorage.getItem("list5"));
    var retrievedList6 = JSON.parse(localStorage.getItem("list6"));

   
    var tbl = document.getElementById("tbl");
    var newRow = tbl.insertRow(n);

    var cells = [retrievedList1[x], retrievedList2[x], retrievedList3[x], retrievedList4[x], retrievedList5[x], retrievedList6[x]];

    for (var i = 0; i < cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = cells[i];
    }

    n++;
    x++;
}
