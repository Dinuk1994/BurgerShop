let code=null;
let iName = null;
let price = null;
let dis = null;
let date = null;
let qty = null;

function add(){
    code = document.getElementById("txtCode").value;
    iName=document.getElementById("txtName").value;
    price= document.getElementById("txtPrice").value;
    dis = document.getElementById("txtDis").value;
    date=document.getElementById("txtExp").value;
    qty=document.getElementById("txtQty").value;

    let itemList=JSON.parse(localStorage.getItem("subItems")) || [];
    itemList.push({code,iName,price,dis,date,qty});

    localStorage.setItem("subItems",JSON.stringify(itemList));

    updateTable();

    return false;

}
