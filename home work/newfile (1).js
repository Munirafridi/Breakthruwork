//document.write("working");

var file = [
  {
    id:111,
    Name: "Khan",
    Age: 12,
    Address: "London",
    phoneno:"03442944943",
  },
  {
    id:1245,
    Name: " Jawad",
    Age: 22,
    Address: "Islamabad",
    phoneno:"03442944943",
  },
  {
    id:12134,
    Name: "Anas",
    Age: 32,
    Address: "Lahore",
    phoneno:"03442944943",
  
  },
  {
    id:123214,
    Name: "Khan",
    Age: 12,
    Address: "London",
    phoneno:"03442944943",
  
  },
];

newfile = document.getElementById("fileid");

newfile.addEventListener("click", () => {
  showfile();
});

const showfile = () => {
  const table = document.getElementById("tblid");
  file.forEach((get) => {
    filerow = document.createElement("tr");
    table.appendChild(filerow);


    filecolum5 = document.createElement("td");
    filecolum5.textContent = get.id;
    filerow.appendChild(filecolum5);



    filecolum1 = document.createElement("td");
    filecolum1.textContent = get.Name;
    filerow.appendChild(filecolum1);
    filecolum2 = document.createElement("td");
    filecolum2.textContent = get.Age;
    filerow.appendChild(filecolum2);
    filecolum3 = document.createElement("td");
    filecolum3.textContent = get.Address;
    filerow.appendChild(filecolum3);


    filecolum6 = document.createElement("td");
    filecolum6.textContent = get.phoneno;
    filerow.appendChild(filecolum6);

    filecolum4 = document.createElement("button");
    filerow.appendChild(filecolum4);
    filecolum4.innerHTML = "Remove";
    filecolum4.classList.add("btn-danger");
    filecolum4.classList.add("btn");
    filecolum4.classList.add("btn-sm");



    // working on deleting a row
    //for remove row
    function removeRow() {
      this.parentElement.remove();
    }
    // we call fucntion
    filecolum4.addEventListener("click", removeRow);
  });
};
