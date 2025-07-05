// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: Scroll to top on logo click
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Optional: Button actions
document.querySelectorAll('.btn-outline, .btn-dark').forEach(button => {
  button.addEventListener('click', e => {
    const text = e.target.textContent.trim().toLowerCase();

    if (text.includes('contact')) {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    } else if (text.includes('read more')) {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    } else if (text.includes('see my work')) {
      document.querySelector('#project').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
