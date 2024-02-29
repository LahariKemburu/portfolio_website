document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  });
  

  function showExperienceDetails(index) {
    const detailsId = `experience-details-${index}`;
    const detailsElement = document.getElementById(detailsId);
  
    // Hide all other experience details
    const allDetails = document.querySelectorAll('.experience-details');
    allDetails.forEach(detail => {
      if (detail.id !== detailsId) {
        detail.style.display = 'none';
      }
    });
  
    // Toggle the visibility of the selected experience details
    if (detailsElement.style.display === 'block') {
      detailsElement.style.display = 'none';
    } else {
      detailsElement.style.display = 'block';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    navToggle.addEventListener('click', function () {
      navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
 
    navLinks.forEach(link => {
       link.addEventListener('click', function (e) {
          e.preventDefault();
 
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
 
          window.scrollTo({
             top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
             behavior: 'smooth'
          });
 
          // Close the menu on link click
          const navList = document.querySelector('nav ul');
          navList.classList.remove('show');
       });
    });
 });

 function toggleMenu() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show');
}
