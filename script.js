document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
        }, index * 500);
    });
});

function showMore() {
    const content = document.createElement("div");
    content.classList.add("extra-content", "fade-in");
    content.innerHTML = `
        <section class="extra-section">
            <h2>More About Me</h2>
            <p>I specialize in building modern, responsive, and visually appealing websites that enhance user experience.</p>
            
            <h3>Skills & Experience</h3>
            <ul>
                <li>Web Development (HTML, CSS, JavaScript, React, Vue)</li>
                <li>UI/UX Design & Prototyping</li>
                <li>Backend Development (Node.js, Express, MongoDB)</li>
                <li>Project Management & Agile Development</li>
            </ul>
            
            <h3>Education & Certifications</h3>
            <ul>
                <li>Bachelor's Degree in Computer Science</li>
                <li>Certified Full-Stack Web Developer</li>
                <li>UI/UX Design Certification</li>
            </ul>
            
            <h3>Awards & Accomplishments</h3>
            <ul>
                <li>Top 10 in National Web Design Competition</li>
                <li>Best UI/UX Design Award 2024</li>
                <li>Recognized for Outstanding Contribution in Web Development</li>
            </ul>
            
            <h3>Professional Accomplishments</h3>
            <ul>
                <li>Developed and launched multiple high-traffic websites</li>
                <li>Worked with global brands to enhance their digital presence</li>
                <li>Led a team of developers in building scalable applications</li>
            </ul>
            
            <h3>References & Testimonials</h3>
            <blockquote>"Radiance is a visionary developer who brings creativity and excellence to every project." – CEO, TechCorp</blockquote>
            <blockquote>"An outstanding professional with exceptional technical skills and dedication." – Lead Designer, Creative Studios</blockquote>
        </section>
    `;
    document.body.appendChild(content);
    
    // Apply animations
    setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 100);
}
