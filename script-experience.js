document.addEventListener('DOMContentLoaded', () => {
    const greenDiv = document.querySelector('.green-div');
    const aboutText = document.querySelector('.about-text');
    const arrowButton = document.querySelector('.arrow');
    greenDiv.classList.add('green-div-fullscreen');

    setTimeout(() => {
        greenDiv.classList.remove('green-div-fullscreen');
        greenDiv.classList.add('green-div-small'); 
        arrowButton.classList.add('fade-in')
        setTimeout(() => {

            aboutText.classList.add('fly-in');
        }, 300);
    }, 1000); 
});


