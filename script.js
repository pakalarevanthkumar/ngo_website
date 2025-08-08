// Basic form submission 
document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    this.reset(); 
});
