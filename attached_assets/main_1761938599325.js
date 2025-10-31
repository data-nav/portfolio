/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
  navlink.forEach((a) => a.classList.remove('active-link'));
  this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.project__item',
  },
  animation: {
    duration: 300,
  },
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
  linkWork.forEach((a) => a.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper('.testimonial__container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});


// Typing Effect with Animated Underline
const typingText = document.getElementById('typing-text');
const titles = ['Data Analyst', 'Business Analyst', 'Data Engineer', 'Data Scientist'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  
  if (isDeleting) {
    typingText.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 100;
  } else {
    typingText.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }
  
  // Update underline width based on text width
  typingText.style.setProperty('--underline-width', typingText.offsetWidth + 'px');
  
  if (!isDeleting && charIndex === currentTitle.length) {
    typingSpeed = 2000;
    isDeleting = true;
  }
  
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
  typeEffect();
});