$(function () {


  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider__nav'
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