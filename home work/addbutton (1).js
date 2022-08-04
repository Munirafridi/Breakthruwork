let newvalue = {};

const addvalue = {
  textdata: function () {
    var ffid = document.getElementById("idtxt").value;
    newvalue.id = ffid;

    var ffname = document.getElementById("nametxt").value;
    newvalue.name = ffname;
    // for age
    var ffage = document.getElementById("agetxt").value;
    newvalue.age = ffage;
    //for address
    var ffaddress = document.getElementById("addresstxt").value;
    newvalue.address = ffaddress;

    var ffphoneno = document.getElementById("phontxt").value;
    newvalue.phoneno = ffphoneno;


  },
};


addrow = document.getElementById("addobj");
// to add new row in table
addrow.addEventListener("click", () => {
  newtable = document.getElementById("tblid");


  row11 = document.createElement("tr");
  newtable.appendChild(row11);
  
  newcolum6 = document.createElement("td");
  newcolum6.textContent = newvalue.id;
  row11.appendChild(newcolum6);
  
  newcolum1 = document.createElement("td");
  newcolum1.textContent = newvalue.name;
  row11.appendChild(newcolum1);
  newcolum2 = document.createElement("td");
  newcolum2.textContent = newvalue.age;
  row11.appendChild(newcolum2);
  newcolum3 = document.createElement("td");
  newcolum3.textContent = newvalue.address;
  row11.appendChild(newcolum3);


  newcolum5 = document.createElement("td");
  newcolum5.textContent = newvalue.phoneno;
  row11.appendChild(newcolum5);




  // adding some button to delete row
  colum4 = document.createElement("button");
  row11.appendChild(colum4);
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
