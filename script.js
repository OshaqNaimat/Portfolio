// script.js

// Simple form submission handler (for demonstration)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
});

// Animate skills bars on scroll
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            bar.style.animation = 'progressAnimation 2s ease-in-out forwards';
        });
    }
});