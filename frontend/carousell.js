
const images = [
];

const descriptions = [
]

const descriptionTitles = [
]

window.addEventListener("load", () => {

    const container = document.getElementById("slider-carrousel");

    fetch("http://localhost:3000/carrousel")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            let html = "";

            if (response[0]) {
                html = `
            ${html}
            <div class="slider">
                    <div class="current-image">
                        <img class="current-image-main" src="${response[0].image}" alt="Current Image">
                        <div class="current-image-desc">
                            <p class="current-image-desc-p" id="CIDescP">${response[0].descripton}</p>
                            <h2 class="current-image-desc-h" id="CIDescH">${response[0].title}</h2>
                        </div>
                        <button class="buttonCar current-image-button" id="nextBtn">
                            <img class="buttonCarImg" src="./assets/Vector 1.svg">
                        </button>
                    </div>
                </div>
            `
            }

            if (response[1]) {
                html = `
                ${html}
                <div class="next-image">
                    <img src="${response[1].image}" alt="Next Image">
                </div>
            `
            }

            container.innerHTML = html;


            let currentIndex = 0;

            const currentImage = document.querySelector(".current-image-main");
            const nextImage = document.querySelector(".next-image img");
            const dots = document.querySelectorAll(".dot");
            const currentDesc = document.getElementById("CIDescP");
            const currentTitle = document.getElementById("CIDescH")

            document.getElementById("nextBtn").addEventListener("click", nextSlide);

            function nextSlide() {
                currentIndex = (currentIndex + 1) % images.length;
                updateImages();
                updateDescription();
            }

            function updateImages() {
                currentImage.src = images[currentIndex];
                nextImage.src = images[(currentIndex + 1) % images.length];

                dots.forEach((dot, index) => {
                    dot.classList.remove("active");
                    if (index === currentIndex) {
                        dot.classList.add("active");
                    }
                });
            }

            function updateDescription() {
                currentDesc.innerHTML = descriptions[currentIndex];
                currentTitle.innerHTML = descriptionTitles[currentIndex];
            }

            for (let i = 0; i < response.length; i++) {
                const element = response[i];
                images.push(element.image);
                descriptions.push(element.descripton);
                descriptionTitles.push(element.title);
            }
        });
});

