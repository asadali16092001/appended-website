// JavaScript to toggle the menu
document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
    let navMenu = document.querySelector('.navmenu ul');
    navMenu.classList.toggle('active'); // Add or remove the 'active' class
  });
  