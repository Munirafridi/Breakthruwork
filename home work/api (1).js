// getting data from  c# .

let getdata = () => {
  url = "https://localhost:7027/WeatherForecast";

  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.text())
    .then((data) => {
    
      // show data by clicking button
      showbtn = document.getElementById("showdata");

      // to shwo data in a table
      showbtn.addEventListener("click", () => {
        loadData(data);
      });
    });
};

getdata();
