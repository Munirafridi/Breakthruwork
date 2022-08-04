//document.write("working");

postdata = document.getElementById("postdata");

postdata.addEventListener("click", () => {


  var id = document.getElementById("idtxt").value;
  var name = document.getElementById("nametxt").value;
  var age = document.getElementById("agetxt").value;
  var address = document.getElementById("addresstxt").value;
  var phoneno = document.getElementById("phontxt").value;
  var sendingData = {
    id: id,
    name: name,
    age: age,
    address: address,
    phoneno: phoneno
  }

  saveData(sendingData)

  function saveData(data) {

    // POST request using fetch()
    fetch("https://localhost:7027/WeatherForecast", {

      // Adding method type
      method: "POST",

      // Adding body or contents to send data contain textfield data 
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      // Converting to JSON
      .then((resp) => {
        if(resp.ok == true){
    
          loadData(data);
          debugger;
          data = document.getElementById("tblid");
debugger;
          row11 = document.createElement("tr");
          newtable.appendChild(row11);
          newcolum1 = document.createElement("td");
          newcolum1.textContent = data.id;
          row11.appendChild(newcolum1);
          newcolum2 = document.createElement("td");
          newcolum2.textContent = data.name;
          row11.appendChild(newcolum2);
          newcolum3 = document.createElement("td");
          newcolum3.textContent = data.age;
          row11.appendChild(newcolum3);
          newcolum5 = document.createElement("td");
          newcolum5.textContent = data.address;
          row11.appendChild(newcolum5);
          newcolum6 = document.createElement("td");
          newcolum6.textContent = data.phoneno;
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
        
        
        }else{

          alert ('Something went wrong')
        }
        

      })

      .then((resp) => {
        console.log(resp);

      })

  }
});
