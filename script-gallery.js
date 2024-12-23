document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded"); // Add the 'loaded' class after the page loads

    // Ensure the carousel starts at the 0th index
    slideIndex = 0;
    clearTimeout(timer); // Clear any previous timer if present
    showSlides(); // Start the carousel from the beginning
});

let slideIndex = 0;
let timer;
let onplayed =  false; 

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Reset all slides and dots to their default state
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "fly-in", "fly-out");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#717171";
    }

    // Handle the fly-out animation
    if (slideIndex > 0) {
        slides[slideIndex - 1].classList.add("fly-out");
    } else if  (onplayed){
        slides[slides.length - 1].classList.add("fly-out");
    }
    else{
        onplayed = true
    }

    // Activate the current slide
    slides[slideIndex].classList.add("active", "fly-in");

    // Update the active dot
    dots[slideIndex].style.backgroundColor = "#bbb"; // Active dot color

    // Transition background color
    const bgColors = ["#515a47", "#7a4419", "#400406"]; // Background colors for slides
    document.body.style.transition = "background-color 1.5s ease-in-out"; // Smooth transition
    document.body.style.backgroundColor = bgColors[slideIndex];

    // Increment the slideIndex
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;

    // Restart the timer
    timer = setTimeout(showSlides, 3500);
}

function currentSlide(n) {
    clearTimeout(timer); // Stop the automatic transition
    slideIndex = n; // Set the current slide index
    showSlides(); // Show the slide immediately
}

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    const hoverColor = button.getAttribute("data-hover-color");

    button.addEventListener("mouseover", () => {
        button.style.setProperty("--hover-color", hoverColor);
    });

    button.addEventListener("mouseout", () => {
        button.style.setProperty("--hover-color", "transparent");
    });
});

const shrinkButton = document.getElementById("shrink-button");
const text = document.getElementById("carousel-text");
const threebuttons = document.getElementById("three-buttons");

shrinkButton.addEventListener("click", () => {
    text.style.display = "none";
    threebuttons.style.display = "none";
    shrinkButton.style.display = "none";

    shrinkButton.disabled = true;

    clearTimeout(timer); // Stop the timer
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fly-in", "fly-out");
    }
});

