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

  const overviewSectionStart = $('#overview-section-start').offset().top;
  const researchSectionStart = $('#research-section-start').offset().top - 200;
  const brandingSectionStart = $('#branding-section-start').offset().top - 200;
  const processSectionStart = $('#process-section-start').offset().top - 200;

  const activeScrollLink = function() {
    const scrollTop = $(window).scrollTop();
    $('#overview-link').toggleClass(
      'scroll-active-pink',
      scrollTop < researchSectionStart
    );
    $('#research-link').toggleClass(
      'scroll-active-pink',
      scrollTop > researchSectionStart && scrollTop < brandingSectionStart
    );
    $('#branding-link').toggleClass(
      'scroll-active-pink',
      scrollTop > brandingSectionStart && scrollTop < processSectionStart
    );
    $('#process-link').toggleClass(
      'scroll-active-pink',
      scrollTop > processSectionStart
    );
  };

  $(window).scroll(function() {
    activeScrollLink();
  });

  var $compGallery = $('a.comp-gallery').colorbox({
    rel: 'comp-gallery',
    maxWidth: '100%'
  });

  $('#competitive-link').click(function(e) {
    e.preventDefault();
    $compGallery.eq(0).click();
  });

  var $persGallery = $('a.pers-gallery').colorbox({
    rel: 'pers-gallery',
    maxWidth: '100%'
  });

  $('#persona-link').click(function(e) {
    e.preventDefault();
    $persGallery.eq(0).click();
  });

  var $brandGallery = $('a.brand-gallery').colorbox({
    rel: 'brand-gallery',
    maxWidth: '80%'
  });

  $('#brand-link').click(function(e) {
    e.preventDefault();
    $brandGallery.eq(0).click();
  });

  $('#moodboard-lb').click(function(e) {
    e.preventDefault();
    $brandGallery.eq(0).click();
  });

  $('#mindmap-lb').click(function(e) {
    e.preventDefault();
    $brandGallery.eq(2).click();
  });

  $('#logo-lb').click(function(e) {
    e.preventDefault();
    $brandGallery.eq(3).click();
  });

  $('#styleguide-lb').click(function(e) {
    e.preventDefault();
    $brandGallery.eq(-3).click();
  });

  var $userStoryGallery = $('a.user-story-gallery').colorbox({
    rel: 'user-story-gallery',
    maxWidth: '80%'
  });

  $('#user-story-link').click(function(e) {
    e.preventDefault();
    $userStoryGallery.eq(0).click();
  });

  var $flowGallery = $('a.flow-gallery').colorbox({
    rel: 'flow-gallery',
    maxWidth: '80%'
  });

  $('#flow-link').click(function(e) {
    e.preventDefault();
    $flowGallery.eq(0).click();
  });

  var $lofiGallery = $('a.lofi-gallery').colorbox({
    rel: 'lofi-gallery',
    maxWidth: '80%'
  });

  $('#lofi-link').click(function(e) {
    e.preventDefault();
    $lofiGallery.eq(0).click();
  });

  var $hifiGallery = $('a.hifi-gallery').colorbox({
    rel: 'hifi-gallery',
    maxWidth: '80%'
  });

  $('#hifi-link').click(function(e) {
    e.preventDefault();
    $hifiGallery.eq(0).click();
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
