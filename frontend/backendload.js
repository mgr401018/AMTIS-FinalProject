window.addEventListener("load", () => {
  fetch("http://localhost:3000/grid_images")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
});
