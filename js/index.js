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
busImg.addEventListener('dblclick', function(e) {
  busImg.style.transform = 'rotate(180deg)';
});

//4...mouse enter transform scale of pics
const contentImg = document.querySelector('.img-content img');
contentImg.addEventListener('mouseenter', () => {
  contentImg.style.transform = 'scale(1.25)';
});

//5... mouse leave scale pic back to original size
contentImg.addEventListener('mouseleave', () => {
  contentImg.style.transform = 'scale(1)';
});

//6. keydown on body element
const clickBody = document.querySelector('body');
clickBody.addEventListener('keydown', e => {
  console.log(`key was pressed!`);
});

//7. click content destination and img
const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('click', e => {
  console.log(`content destination clicked`);
});

const contentDestinationImg = document.querySelector(
  '.content-destination img',
);
contentDestinationImg.addEventListener('click', e => {
  console.log(`content destination img clicked`);
  e.stopPropagation();
});

//8....prevent default copy
const bodyCopy = document.querySelector('body');
bodyCopy.addEventListener('copy', e => {
  console.log('copied');
});

//9... prevent default
document.querySelector('.nav a').addEventListener('click', function(event) {
  event.preventDefault();
});

//10. scroll

const wheelScroll = document.querySelector('body');
wheelScroll.addEventListener('drag', function(e) {
  console.log('dragged!');
});
