fetch("2.jpg")
  .then((response) => {
    debugger;
    console.log(response);
    return response.blob();
  })
  .then((response) => {
    console.log(response);
    document.getElementById("img").src = URL.createObjectURL(response);
  })
  .catch((Error) => {
    console.log(Error);
  });

