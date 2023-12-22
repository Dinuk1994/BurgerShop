function updateTable(){
    let itemList=JSON.parse(localStorage.getItem("bevItems"))||[];
    let tableBody=document.querySelector("tbody");

    tableBody.innerHTML="";

    itemList.forEach(element => {
        let row=tableBody.insertRow();
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);

        cell1.textContent=element.iName;
        cell2.textContent=element.price;
        cell3.textContent=element.dis;
        cell4.textContent=element.date;
    });

}

updateTable();