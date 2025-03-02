// script.js
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
  });
  
  // Add smooth scrolling to navbar links
  document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });