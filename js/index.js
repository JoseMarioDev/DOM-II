//1... click H1,change cursor to pointer and alert welcome
const headerLogo = document.querySelector('.logo-heading');
headerLogo.style.cursor = 'pointer';
headerLogo.addEventListener('click', function(e) {
  alert('welcome to the fun bus!!!!');
});

//2...mouseover links change color to red
const navLink = document.querySelectorAll('nav a');
navLink.forEach(function(el) {
  el.addEventListener('mouseover', () => {
    el.style.color = 'red';
  });
});

//3...double Click bus img. rotate 180deg
const busImg = document.querySelector('.intro img');
busImg.addEventListener('dblclick', () => {
  busImg.style.transform = 'rotate(180deg)';
});

//4...mouse enter transform scale of pics
const contentImg = document.querySelector('.img-content img');
console.log(contentImg);
contentImg.addEventListener('mouseenter', () => {
  contentImg.style.transform = 'scale(1.25)';
});

//5... mouse leave scale pic back to original size
contentImg.addEventListener('mouseleave', () => {
  contentImg.style.transform = 'scale(1)';
});
g