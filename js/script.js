// Verification confirmation when contact form submits
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    // Front-end user alert verification
    alert(`Thank you for reaching out, ${name}! Your form submission simulation was triggered.`);
    
    this.reset();
});