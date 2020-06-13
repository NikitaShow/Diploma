$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.pag-1',
      type: 'fraction',
    },
    navigation: {
      nextEl: this.querySelector('.swiper-button-next'),
      prevEl: this.querySelector('.swiper-button-prev'),
    }
  });
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
  });
  var mySwiper = new Swiper ('.swiper-container1', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.pag-2',
      type: 'fraction',  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var mySwiper = new Swiper ('.swiper-container2', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 90,
    loop: true,
    navigation: {
      nextEl: this.querySelector('.swiper-button-next3'),
      prevEl: this.querySelector('.swiper-button-prev3'),
    }
  });
});




