const menuIcon = document.getElementById('nav-menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', () => {
    menuIcon.classList.remove('change');
    navLinks.classList.remove('active');
});

//add scrollTo offset for navbar anchor links to prevent overlapping with navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //for all <a> anchor links that contain "#"
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const navbarHeight = document.querySelector('nav').offsetHeight; // get the height of <nav> tag element
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: 'smooth' // Optional: for smooth scrolling
        });
      }
    });
  });