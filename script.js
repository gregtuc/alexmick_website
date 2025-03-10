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

    // Simple visibility toggle for carousel
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    const musicItems = Array.from(document.querySelectorAll('.music-item'));
    
    if (musicItems.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    
    // Set initial visibility
    updateVisibility();
    
    // Add button event listeners
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + musicItems.length) % musicItems.length;
            updateVisibility();
        });
        
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % musicItems.length;
            updateVisibility();
        });
    }
    
    function updateVisibility() {
        // Show only the current item
        musicItems.forEach((item, index) => {
            const isCurrentOrNext = (index === currentIndex || index === (currentIndex + 1) % musicItems.length);
            item.style.display = isCurrentOrNext ? 'block' : 'none';
        });
        
        // Log which items are visible
        console.log('Currently showing:', currentIndex, 'and', (currentIndex + 1) % musicItems.length);
    }
}); 