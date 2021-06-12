const responsiveBtnIcon = document.querySelector(".responsive-menu-btn");
const navMenu = document.querySelector(".nav__menu");

responsiveBtnIcon.addEventListener("click", () => {
  responsiveBtnIcon.classList.toggle("--is-open");
  navMenu.classList.toggle("--is-open");
});

$('.nav-item').click(function () {
  responsiveBtnIcon.classList.toggle("--is-open");
  navMenu.classList.toggle("--is-open");
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header__main').addClass("fixed-me");
    } else {
      $(".header__main").removeClass("fixed-me");
    }
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.nav-link').addClass("color");
    } else {
      $(".nav-link").removeClass("color");
    }
  });
});



$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.logo').addClass("here");
    } else {
      $(".logo").removeClass("here");
    }
  });
});

