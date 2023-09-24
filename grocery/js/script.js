/*let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.navbar');

menu.addEventListener('click',() => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
});
*/

/* JavaScript Code
let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('&times');
  menu.classList.toggle('active');
  
  // Toggle the visibility of the navbar when the "menu-bar" is clicked
  nav.classList.toggle('active');
});
*/

let CountDate = new Date('September 30, 2023 00:00:00').getTime();
function CountDown() {
  
  let now = new Date().getTime();
  gap = CountDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor( gap / (day));
  let h = Math.floor((gap % (day))/ (hour));
  let m = Math.floor((gap % (hour))/ (minute));
  let s = Math.floor((gap % (minute))/ (second));

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('min').innerText = m;
  document.getElementById('sec').innerText = s;

}

setInterval(function(){
  CountDown();
},1000);