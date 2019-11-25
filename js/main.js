$(function () {


  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    fade: false,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arow-next.svg" alt=""></button>',

    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false,
        autoplay: true
      }
    }]

  });

  $('.slider__nav').slick({
    asNavFor: '.slider__inner',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 5,
        variableWidth: false,
      }
    }, ]
  });


  $('.header__menu ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  });


  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
    $('.header__menu-btn').toggleClass('burger_active');
  });


});