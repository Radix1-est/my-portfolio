document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
        }, index * 500);
    });
});

function showMore() {
    alert("Welcome to my portfolio! Explore my work below.");
}
