window.addEventListener("load", () => {
  fetch("http://localhost:3000/grid_images")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
});

window.addEventListener("load", () => {
  fetch("http://localhost:3000/carrousel")
  .then(function (response) {
    return response.json();
  })
  .then(function(response) {
    for(let i = 0; i<=response.length-1; i++) {
      response[i].title;
    }
  });
});
