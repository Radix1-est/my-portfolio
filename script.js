document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", showMore);
    }
});

function showMore() {
    const contentDiv = document.getElementById("content");

    if (contentDiv.innerHTML !== "") return; // Prevent adding duplicate content

    contentDiv.innerHTML = `
        <div class="extra-content fade-in">
            <h2>More About Me</h2>
            <p>I specialize in creating modern, responsive, and visually appealing websites.</p>

            <h3>Skills & Experience</h3>
            <ul>
                <li>Frontend Development (HTML, CSS, JavaScript, React)</li>
                <li>UI/UX Design & Prototyping</li>
                <li>Backend Development (Node.js, Express, MongoDB)</li>
                <li>Project Management & Agile Development</li>
            </ul>

            <h3>Education & Certifications</h3>
            <ul>
                <li>Bachelor's Degree in Computer Science</li>
                <li>Certified Full-Stack Web Developer</li>
            </ul>

            <h3>Awards & Accomplishments</h3>
            <ul>
                <li>Top 10 in National Web Design Competition</li>
                <li>Best UI/UX Design Award 2024</li>
            </ul>
        </div>
    `;

    // Apply fade-in animation
    setTimeout(() => {
        contentDiv.style.opacity = "1";
        contentDiv.style.transform = "translateY(0)";
    }, 100);
}
