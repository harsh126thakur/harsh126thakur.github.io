document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Dynamic Scroll Reveal Animation Engine ---
    const revealElements = document.querySelectorAll(".item-card, .sidebar-box, .section-title");
    
    // Attach initial reveal setup classes
    revealElements.forEach(element => {
        element.classList.add("reveal-on-scroll");
    });

    function checkReveal() {
        const triggerBottom = (window.innerHeight / 5) * 4.2;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    }

    // Trigger reveal calculations on scroll and initialization load
    window.addEventListener("scroll", checkReveal);
    checkReveal();

    // --- 2. Dynamic Sticky Navbar Glass Blur Shift ---
    const headerElement = document.querySelector("header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            headerElement.style.padding = "0.6rem 0";
            headerElement.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            headerElement.style.padding = "1.2rem 0";
            headerElement.style.boxShadow = "none";
        }
    });

    // --- 3. Interactive Contact Form Handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            
            // Front-end user alert message simulation
            alert(`Thank you for reaching out, ${name}! Your message has been recorded.`);
            
            this.reset();
        });
    }
});