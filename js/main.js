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
    responsive: [{
      breakpoint: 901,
        settings: {
          slidesToShow: 5,
          variableWidth: false,
        }
    },
    {
      breakpoint: 741,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        }
    },
    {
      breakpoint: 607,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
    },

    {
      breakpoint: 456,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
    },
  ]
  });


  $('.header__menu ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
 });


  $('.burger').on('click', function(){
     $('.header__menu ul').slideToggle();
     $('.burger').toggleClass('burger_active');
  });

  
});
