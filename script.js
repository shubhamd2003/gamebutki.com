const rcbButton = document.getElementById('rcbButton');
const cskButton = document.getElementById('cskButton');
const resultDiv = document.getElementById('result');

let moveInterval;

rcbButton.addEventListener('click', () => {
    // Move the RCB button to a random position
    if (!moveInterval) {
        moveInterval = setInterval(() => {
            const x = Math.random() * (window.innerWidth - rcbButton.offsetWidth);
            const y = Math.random() * (window.innerHeight - rcbButton.offsetHeight);
            rcbButton.style.position = 'absolute';
            rcbButton.style.left = `${x}px`;
            rcbButton.style.top = `${y}px`;
        }, 100); // Move every 100 milliseconds
    }
    resultDiv.textContent = 'Iss baar bhi Haar jaaoge Cup Nhi Melega'; // Show message when RCB is clicked
});

cskButton.addEventListener('click', () => {
    clearInterval(moveInterval); // Stop moving the RCB button
    moveInterval = null; // Reset the interval
    resultDiv.textContent = 'Matlab tum bhi Janti ho CSK jeetega hahhahahahahah!!!  AAB Haso'; // Dekha Kannu CSK jeet gaya na Noobdi
});