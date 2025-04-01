document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");
    
    // Add event listener for the Explore button
    exploreBtn.addEventListener("click", function() {
        // Redirect to about.html when the button is clicked
        window.location.href = 'about.html';
    });

    // Interactive background code (if you have it)
    const canvas = document.getElementById("interactive-bg");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array to hold stars
    const stars = [];
    const numStars = 200; // Number of stars

    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,  // Random x position
            y: Math.random() * canvas.height, // Random y position
            radius: Math.random() * 2 + 1,    // Random radius
            speed: Math.random() * 0.5 + 0.5   // Random speed
        });
    }

    // Function to draw stars
    function drawStars() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White stars
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            // Move stars down
            star.y += star.speed;
            // Reset star position to top if it moves out of the canvas
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width; // Random x position when reset
            }
        });
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        drawStars(); // Draw stars
        requestAnimationFrame(animate); // Request the next animation frame
    }

    animate(); // Start the animation
});
document.addEventListener("DOMContentLoaded", function() {
    const nameTitle = document.querySelector(".name-title");
    const nameText = "Radiance Esteban";
    let index = 0;

    function typeEffect() {
        if (index < nameText.length) {
            nameTitle.textContent += nameText[index];
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.createElement("div");
    stars.classList.add("star-container");
    document.body.appendChild(stars);

    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        stars.appendChild(star);
    }
});
