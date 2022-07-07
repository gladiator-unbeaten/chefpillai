// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      document.getElementById('brandlogo').classList.remove('logo');
      document.getElementById('brandlogo').width = "50";
		document.getElementById('navbar_top').style.backgroundColor = "#000000";
		document.getElementById('wrapper').classList.add('fixed-bottom');
		
//       add padding top to show content behind navbar
//              navbar_height = document.querySelector('.navbar').offsetHeight;
//              document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      document.getElementById('brandlogo').classList.add('logo');
      var elem = document.querySelector('#brandlogo');
      elem.style.display = 'initial';
      document.getElementById('navbar_top').style.removeProperty("background-color");
      //          remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});