/* assets/js/main.js */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Speed-Net site loaded.');

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('formMessage').textContent = 'Thanks for reaching out. We’ll contact you soon!';
      form.reset();
    });
  }
});