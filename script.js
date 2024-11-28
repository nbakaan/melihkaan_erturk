// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Smooth Scroll for Links
const navLinks = document.querySelectorAll('.nav a, .btn');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Animated Card Hover Effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.1)';
    card.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.5)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
  });
});
