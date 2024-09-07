window.addEventListener("load", () => {

    const container = document.getElementById("slider-carrousel");

    fetch("http://localhost:3000/carrousel")
    .then(function (response) {
      return response.json();
    })
    .then(function(response) {
        let html = "";

        for(let i = 0; i< response.length; i++) {
            const element = response[i];
            html = `
            ${html}
                <div class="slider">
                    <div class="current-image">
                        <img class="current-image-main" src="${element.image}" alt="Current Image">
                        <div class="current-image-desc">
                            <p class="current-image-desc-p" id="CIDescP">${element.description}</p>
                            <h2 class="current-image-desc-h" id="CIDescH">${element.title}</h2>
                        </div>
                        <button class="buttonCar , current-image-button" id="nextBtn">
                            <img class="buttonCarImg" src="./assets/Vector 1.svg">
                        </button>
                    </div>
                </div>
            `
        }

        
      container.innerHTML = html;
    });
  });
  