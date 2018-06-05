$(function() {
  const stickyTopNav = $('.flex-row-container').offset().top;

  const stickyNav = function() {
    const scrollTop = $(window).scrollTop();
    $('.flex-row-container').toggleClass(
      'top-sticky-bar',
      scrollTop > stickyTopNav
    );
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  $.localScroll({
    offset: -90
  });

  const uxSectionStart = $('#ux-scroll-position').offset().top;
  const archSectionStart = $('#arch-scroll-position').offset().top - 200;

  const activeScrollLink = function() {
    const scrollTop = $(window).scrollTop();
    $('#ux-scroll-link').toggleClass(
      'scroll-active-pink',
      scrollTop < archSectionStart
    );
    $('#arch-scroll-link').toggleClass(
      'scroll-active-blue',
      scrollTop > archSectionStart
    );
  };

  $(window).scroll(function() {
    activeScrollLink();
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

  var $furngallery = $('a.furn-gallery').colorbox({
    rel: 'furn-gallery',
    maxWidth: '100%'
  });

  $('#furn-link').click(function(e) {
    e.preventDefault();
    $furngallery.eq(0).click();
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
});
