document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Intersection Observer Performance Animation Engine ---
    const revealElements = document.querySelectorAll(".item-card, .sidebar-box, .section-title");
    
    // Initialize fade configuration states safely
    revealElements.forEach(element => {
        element.classList.add("reveal-on-scroll");
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Unobserve once animated to save GPU overhead cycle resources
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- 2. Interactive Navigation Blur Management ---
    const headerElement = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 40) {
            headerElement.style.padding = "0.7rem 0";
            headerElement.style.background = "rgba(11, 15, 25, 0.85)";
            headerElement.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            headerElement.style.padding = "1.2rem 0";
            headerElement.style.background = "rgba(11, 15, 25, 0.8)";
            headerElement.style.boxShadow = "none";
        }
    });

    // --- 3. Contact Form Submission Safety ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you for reaching out, ${name}! Your form message submission simulation was triggered.`);
            this.reset();
        });
    }
});