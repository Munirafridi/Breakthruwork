var value = [
  {
    id:12313,
    name: "shamim",
    age: 42,
    address: "Karachi",
    phoneno:"03443668245"
  },
  {
    id:343,
    name: "asim",
    age: 23,
    address: "peshwar",
    phoneno:"03443668245"
  },
  {

    id:768,
    name: "ahmad",
    age: 44,
    address: "sadar",
    phoneno:"03443668245"
  },
  {
    id:4367,
    name: "waqar",
    age: 50,
    address: "islamabad",
    phoneno:"03443668245"
  },
  {
    id:35346,
    name: "hamad",
    age: 28,
    address: "town",
    phoneno:"03443668245"
  },
];
show = document.getElementById("showarray");
// to shwo data in a table
show.addEventListener("click", () => {
  load();
});

const load = () => {
  const table = document.getElementById("tblid");
  // 'element' is parameter we can take any name here
  value.forEach((element) => {
    row = document.createElement("tr");
    table.appendChild(row);
    colum1 = document.createElement("td");
    colum1.textContent = element.name;
    row.appendChild(colum1);

    colum5 = document.createElement("td");
    colum5.textContent = element.id;
    row.appendChild(colum5);



    colum2 = document.createElement("td");
    colum2.textContent = element.age;
    row.appendChild(colum2);
    colum3 = document.createElement("td");
    colum3.textContent = element.address;
    row.appendChild(colum3);

    colum6 = document.createElement("td");
    colum6.textContent = element.phoneno;
    row.appendChild(colum6);

    colum4 = document.createElement("button");
    row.appendChild(colum4);
    // to add button text
    colum4.innerHTML = "Delete";
    // to add class in java button
    colum4.classList.add("btn");
    colum4.classList.add("btn-danger");
    colum4.classList.add("btn-sm");

    // working on deleting a row
    //for remove row
    function removeRow() {
      this.parentElement.remove();
    }
    // we call fucntion
    colum4.addEventListener("click", removeRow);
  });
};
