// document.querySelector('.menu-mobile').onclick = function() {
//   document.querySelector('.menu-mobile').classList.toggle('active');
//   document.querySelector('.nav-menu-hidden').classList.toggle('active');
// };

document.querySelectorAll('.menu-mobile').onclick = function() {
  document.querySelectorAll('.menu-mobile.nav-menu-hidden').classList.toggle('active');
};

document.querySelector('.feedback').onclick = function() {
  document.querySelector('.popup-hidden').classList.toggle('active');
};

document.querySelector('.feedback-mobile-link').onclick = function() {
  document.querySelector('.popup-hidden').classList.toggle('active');
};

document.querySelector('.popup-close').onclick = function() {
  document.querySelector('.popup-hidden').classList.toggle('active');
};



