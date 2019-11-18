$(function () {


  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arow-next.svg" alt=""></button>',
  });

  $('.slider__nav').slick({
    asNavFor: '.slider__inner',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
  });


});