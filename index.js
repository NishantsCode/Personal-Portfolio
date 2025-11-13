// Typewriter Effect
const texts = ['Software Developer','Web Developer', 'Developer', 'Full Stack Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterElement = document.getElementById('typewriter');

function typeWriter() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 50 : 100;
  
  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500; // Pause before next word
  }
  
  setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});

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

// Back to top button
window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
});

// Back to top button click
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
