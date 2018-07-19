$(function() {
  lazyload();

  $('.meatballs').on('click', function() {
    $('.mobile-case-links').toggleClass('click-show');
  });

  const stickyTopNav = $('.flex-row-container').offset().top;

  const stickyBallsNav = $('.mobile-meatballs-menu').offset().top;

  const stickyNav = function() {
    const scrollTop = $(window).scrollTop();
    $('.flex-row-container').toggleClass(
      'top-sticky-bar',
      scrollTop > stickyTopNav
    );
  };

  const stickyNavMobile = function() {
    const scrollTop = $(window).scrollTop();
    $('.mobile-meatballs-menu').toggleClass(
      'top-sticky-bar',
      scrollTop > stickyBallsNav
    );
  };

  // stickyNav();
  //
  // stickyNavMobile();

  $(window).scroll(function() {
    stickyNav();
    stickyNavMobile();
  });

  $.localScroll({
    offset: 0
  });

  var $stripGallery = $('a.strip-gallery').colorbox({
    rel: 'strip-gallery',
    maxWidth: '100%'
  });

  $('#strip-video').colorbox({
    iframe: true,
    innerWidth: 840,
    innerHeight: 472.5
  });

  $('#strip-link').click(function(e) {
    e.preventDefault();
    $stripGallery.eq(0).click();
  });

  var $floGallery = $('a.flo-gallery').colorbox({
    rel: 'flo-gallery',
    maxWidth: '100%'
  });

  $('#flo-link').click(function(e) {
    e.preventDefault();
    $floGallery.eq(0).click();
  });

  var $waterGallery = $('a.water-gallery').colorbox({
    rel: 'water-gallery',
    maxWidth: '100%'
  });

  $('#water-link').click(function(e) {
    e.preventDefault();
    $waterGallery.eq(0).click();
  });

  var $furnGallery = $('a.furn-gallery').colorbox({
    rel: 'furn-gallery',
    maxWidth: '100%'
  });

  $('#furn-link').click(function(e) {
    e.preventDefault();
    $furnGallery.eq(0).click();
  });

  var $blobgallery = $('a.blob-gallery').colorbox({
    rel: 'blob-gallery',
    maxWidth: '100%'
  });

  $('#blob-link').click(function(e) {
    e.preventDefault();
    $blobgallery.eq(0).click();
  });

  var $comicgallery = $('a.comic-gallery').colorbox({
    rel: 'comic-gallery',
    maxWidth: '100%'
  });

  $('#comic-link').click(function(e) {
    e.preventDefault();
    $comicgallery.eq(0).click();
  });

  var $skgallery = $('a.sketch-gallery').colorbox({
    rel: 'sk-gallery',
    maxWidth: '100%'
  });

  $('#sketch-link').click(function(e) {
    e.preventDefault();
    $skgallery.eq(0).click();
  });

  var workCarousel = $('#more-work');
  workCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 2,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });

  $('#prev > a').click(function(e) {
    e.preventDefault();
    workCarousel.trigger('prev.owl.carousel');
  });

  $('#next > a').click(function(e) {
    e.preventDefault();
    workCarousel.trigger('next.owl.carousel');
  });
});
