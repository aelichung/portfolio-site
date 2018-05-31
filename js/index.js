$(function() {
  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('arrow');
    $('.click-show').toggle('fast');
  });
  var timer;
  $('.comic-pop-out-right').hover(
    function() {
      timer = setTimeout(function() {
        $('.bottom-right')
          .stop(true, true)
          .animate(
            {
              right: '5%'
            },
            1000,
            function() {}
          );
        $('.comic-pop-out-right')
          .find('.hover-show')
          .stop(true, true)
          .animate(
            {
              opacity: '1'
            },
            1000,
            function() {}
          );
      }, 150);
    },
    function() {
      clearTimeout(timer);
      $('.bottom-right')
        .stop(true, true)
        .animate(
          {
            right: '-2em'
          },
          1000,
          function() {}
        );
      $('.comic-pop-out-right')
        .find('.hover-show')
        .stop(true, true)
        .animate(
          {
            opacity: '0'
          },
          1000,
          function() {}
        );
    }
  );

  $('.comic-pop-out-left').hover(
    function() {
      timer = setTimeout(function() {
        $('.bottom-left')
          .stop(true, true)
          .animate(
            {
              left: '1em'
            },
            1000,
            function() {}
          );
        $('.comic-pop-out-left')
          .find('.hover-show')
          .stop(true, true)
          .animate(
            {
              opacity: '1'
            },
            1000,
            function() {}
          );
      }, 150);
    },
    function() {
      clearTimeout(timer);

      $('.bottom-left')
        .stop(true, true)
        .animate(
          {
            left: '-6em'
          },
          1000,
          function() {}
        );
      $('.comic-pop-out-left')
        .find('.hover-show')
        .stop(true, true)
        .animate(
          {
            opacity: '0'
          },
          1000,
          function() {}
        );
    }
  );

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

  var $furngallery = $('a.furn-gallery').colorbox({
    rel: 'furn-gallery'
  });

  $('#furn-link').click(function(e) {
    e.preventDefault();
    $furngallery.eq(0).click();
  });

  var $blobgallery = $('a.blob-gallery').colorbox({
    rel: 'blob-gallery'
  });

  $('#blob-link').click(function(e) {
    e.preventDefault();
    $blobgallery.eq(0).click();
  });

  var $comicgallery = $('a.comic-gallery').colorbox({
    rel: 'comic-gallery'
  });

  $('#comic-link').click(function(e) {
    e.preventDefault();
    $comicgallery.eq(0).click();
  });

  var $skgallery = $('a.sketch-gallery').colorbox({
    rel: 'sk-gallery'
  });

  $('#sketch-link').click(function(e) {
    e.preventDefault();
    $skgallery.eq(0).click();
  });
});
