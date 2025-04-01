document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const contactForm = document.getElementById("contactForm");

    exploreBtn.addEventListener("click", function() {
        location.href = 'about.html';
    });

    darkModeToggle.addEventListener("click", toggleDarkMode);

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message!");
        contactForm.reset(); // Reset form after submission
    });

    // Interactive Background (Canvas Animation)
    const canvas = document.getElementById("interactive-bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 1,
            color: "rgba(255, 255, 255, 0.8)",
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
            if (p.y > canvas.height || p.y < 0) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
