document.addEventListener("DOMContentLoaded", function () {
    const animatedTexts = document.querySelectorAll(".animated-text");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // run once per element
                }
            });
        },
        {
            threshold: 0.1, // fire when 10% visible
        }
    );

    animatedTexts.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});