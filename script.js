document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling Effect
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Fade-in Sections on Scroll
    const sections = document.querySelectorAll("section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load

    // Welcome Animation
    setTimeout(() => {
        alert("Welcome to Ranjith's Interactive Portfolio! 🚀");
    }, 500);
});
