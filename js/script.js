// Contact Form Submission Action Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    // Web UI alert to test functionality
    alert(`Thank you for reaching out, ${name}! Your form submission action was triggered.`);
    
    this.reset();
});