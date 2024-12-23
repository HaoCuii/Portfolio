const words = ["Designer.", "Creator.", "Innovator."];
const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200;

function typeWord() {
    const currentWord = words[wordIndex];
    const visibleText = isDeleting 
        ? currentWord.substring(0, charIndex--) 
        : currentWord.substring(0, charIndex++);

    typingText.textContent = visibleText;

    if (!isDeleting && charIndex === currentWord.length+1) {
        // Pause at the end of typing
        delay = 500; 
        isDeleting = true; // Start deleting
    } else if (isDeleting && charIndex < 0) {
        // Pause at the end of deletion
        delay = 500; 
        isDeleting = false; // Start typing next word
        wordIndex = (wordIndex + 1) % words.length; // Loop to next word
    } else {
        delay = isDeleting ? 100 : 100; // Typing speed
    }

    setTimeout(typeWord, delay);
}

// Start the typing animation
typeWord();


function next(targetPage) {
    loader.style.animation = 'circleIn 1s forwards'; // Start the circle animation
    setTimeout(() => {
        window.location.href = targetPage; // Navigate after the animation completes
    }, 1000); // Match the duration of 'circleIn' animation
}

