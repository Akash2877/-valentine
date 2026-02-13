document.addEventListener('DOMContentLoaded', () => {
    // 1. Floating Hearts Animation
    createFloatingHearts();

    // 2. Fade In Hero
    setTimeout(() => {
        document.querySelector('.hero').classList.add('visible');
    }, 100);

    // 3. Image Gallery
    startGallery();

    // 4. Typing Effect
    startTypingEffect();

    // 5. Scroll Animations
    initScrollAnimations();

    // 6. Modal Logic
    initModal();
});

function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓'];
    const heartCount = 20; // Number of hearts on screen at once

    setInterval(() => {
        if (container.children.length > 30) {
            container.removeChild(container.firstChild);
        }

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        // Randomize position and timing
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's'; // 5-8s duration
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px'; // 15-30px size

        container.appendChild(heart);
    }, 400); // New heart every 400ms
}

function startGallery() {
    const slides = document.querySelectorAll('.gallery-slide');
    let currentSlide = 0;
    const intervalTime = 3500;

    setInterval(() => {
        // Remove active class from current
        slides[currentSlide].classList.remove('active');

        // Calculate next
        currentSlide = (currentSlide + 1) % slides.length;

        // Add active class to next
        slides[currentSlide].classList.add('active');
    }, intervalTime);
}

function startTypingEffect() {
    const textElement = document.getElementById('typing-text');
    const textToType = "Every moment with you is special. Happy Valentine’s Day ❤️";
    let index = 0;

    // Use Intersection Observer to start typing when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (index === 0) { // Only start if not already started
                    typeChar();
                }
            }
        });
    });

    observer.observe(textElement.parentElement);

    function typeChar() {
        if (index < textToType.length) {
            textElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeChar, 80); // 80ms per char
        } else {
            // Stop blinking cursor after a while
            setTimeout(() => {
                document.querySelector('.cursor').style.display = 'none';
            }, 2000);
        }
    }
}

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}

function initModal() {
    const btn = document.getElementById('surprise-btn');
    const modal = document.getElementById('surprise-modal');
    const close = document.querySelector('.close-modal');

    btn.addEventListener('click', () => {
        modal.classList.add('visible');
        createConfetti();
    });

    close.addEventListener('click', () => {
        modal.classList.remove('visible');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('visible');
        }
    });
}

function createConfetti() {
    // Simple confetti effect inside modal if we wanted, 
    // but the main hearts are enough. 
    // Adding a little extra burst of hearts around the button click
    // could be nice, but keeping it lightweight as requested.
}
