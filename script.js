// Mobile menu functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--background-color)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing with: ' + email);
            this.reset();
        });
    }

    // Simple slider functionality
    const prevArrow = document.querySelector('.nav-arrow:first-child');
    const nextArrow = document.querySelector('.nav-arrow:last-child');
    const musicItems = document.querySelectorAll('.music-item');
    let currentIndex = 0;

    // Initialize display
    updateDisplay();

    // Event listeners for navigation arrows
    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + musicItems.length) % musicItems.length;
            updateDisplay();
        });

        nextArrow.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % musicItems.length;
            updateDisplay();
        });
    }

    function updateDisplay() {
        // Hide all items first
        musicItems.forEach(item => {
            item.style.display = 'none';
        });

        // Show current and next item if available
        if (musicItems[currentIndex]) {
            musicItems[currentIndex].style.display = 'block';
        }
        
        if (musicItems[(currentIndex + 1) % musicItems.length]) {
            musicItems[(currentIndex + 1) % musicItems.length].style.display = 'block';
        }
    }
}); 