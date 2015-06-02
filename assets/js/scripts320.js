$(document).ready(function() {
  if($(window).width() <= 340) {

    $('.bxslider').bxSlider({
        slideWidth: 200,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        pagerType: 'short',
    });


    $('.targets-sliders').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        pagerType: 'full',
    });

    $('.reviews-slider').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        pagerType: 'short',
    });

    $('.price-320').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        pagerType: 'full',
    });

    $('.how-it-was-photo-slider').bxSlider({
      slideWidth: 320,
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 0,
      pagerType: 'short',
    });
  }
});
