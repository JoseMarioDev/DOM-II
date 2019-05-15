//1...change cursor to pointer and alert welcome on click
const headerLogo = document.querySelector('.logo-heading');
headerLogo.style.cursor = 'pointer';
headerLogo.addEventListener('click', function(e) {
  alert('welcome to the fun bus!!!!');
});

//2...mouseover links change color to red
const navLink = document.querySelectorAll('nav a');
console.log(navLink);
navLink.forEach(function(el) {
  el.addEventListener('mouseover', () => {
    el.style.color = 'red';
  });
});

//3...
