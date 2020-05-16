$('.btn-burger').click(function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
   $('.mobile-menu').fadeOut();
});

$('.main').slick({
   arrows: false,
   fade: true,
   autoplay: true,
   autoplaySpeed: 2000,
   adaptiveHeight: true
});

$('.document-box').fancybox();