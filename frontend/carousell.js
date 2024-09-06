const images = [
    "./images/Rectangle 24.png",
    "./images/Rectangle 25.png",
    "./images/Rectangle 40.png",
    "./images/Rectangle 41.png"
];

const descriptions = [
    "D1",
    "D2",
    "D3",
    "D4"
]

const descriptionTitles = [
    "Title1",
    "Title2",
    "Title3",
    "Title4"
]

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

function updateDescription(){
    currentDesc.innerHTML = descriptions[currentIndex];
    currentTitle.innerHTML = descriptionTitles[currentIndex];
}