const loadData = (data) => {
  const table = document.getElementById("tblid");
  data = JSON.parse(data);
  // 'element' is parameter we can take any name here

  data.forEach((element) => {
    row = document.createElement("tr");
    table.appendChild(row);
    colum1 = document.createElement("td");
    colum1.textContent = element.id;
    row.appendChild(colum1);
    colum2 = document.createElement("td");
    colum2.textContent = element.name;
    row.appendChild(colum2);
    colum3 = document.createElement("td");
    colum3.textContent = element.age;
    row.appendChild(colum3);
    colum5 = document.createElement("td");
    colum5.textContent = element.address;
    row.appendChild(colum5);
    colum6 = document.createElement("td");
    colum6.textContent = element.phoneNo;
    row.appendChild(colum6);
    // adding some button to delete row
    colum4 = document.createElement("button");
    row.appendChild(colum4);
    // to add button text
    colum4.innerHTML = "Delete";
    // to add class in java button
    colum4.classList.add("btn");
    colum4.classList.add("btn-danger");
    colum4.classList.add("btn-sm");
    colum4.type = "button";
    // working on deleting a row
    //for remove row
    function removeRow() {
      this.parentElement.remove();
    }
    // we call fucntion
    colum4.addEventListener("click", removeRow);
  });
};
