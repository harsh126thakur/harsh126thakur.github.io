document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Interactive Digital Circuit & Matrix Canvas Graphics Engine ---
    const canvas = document.getElementById("circuitCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let particles = [];
        const maxParticles = 45;
        
        let mouse = { x: null, y: null, radius: 160 };
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        class CircuitNode {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.radius = Math.random() * 2 + 1.5;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(56, 189, 248, 0.45)";
                ctx.fill();
            }
        }

        for (let i = 0; i < maxParticles; i++) {
            particles.push(new CircuitNode());
        }

        function drawCircuitGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.strokeStyle = "rgba(56, 189, 248, 0.015)";
            ctx.lineWidth = 1;
            let gridSize = 60;
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - distance / 130)})`;
                        ctx.lineWidth = 0.8;
                        
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[i].y); 
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                if (mouse.x !== null) {
                    const dxMouse = particles[i].x - mouse.x;
                    const dyMouse = particles[i].y - mouse.y;
                    const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    
                    if (mouseDist < mouse.radius) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - mouseDist / mouse.radius)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawCircuitGrid);
        }
        drawCircuitGrid();
    }

    // --- 2. Intersection Observer Performance Animation Engine ---
    const revealElements = document.querySelectorAll(".item-card, .sidebar-box, .section-title");
    revealElements.forEach(element => {
        element.classList.add("reveal-on-scroll");
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
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

    // --- 3. Dynamic Sticky Navbar Glass Blur Shift ---
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

    // --- 4. Interactive Contact Form Handler ---
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