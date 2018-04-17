$(function() {
  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('arrow');
    $('.click-show').toggle('fast');
  });
  $('.comic-pop-out-right').hover(
    function() {
      $('.bottom-right').animate(
        {
          right: '5%'
        },
        1000,
        function() {}
      );
      $(this)
        .find('.hover-show')
        .animate(
          {
            opacity: '1'
          },
          1000,
          function() {}
        );
    },
    function() {
      $('.bottom-right').animate(
        {
          right: '-2em'
        },
        1000,
        function() {}
      );
      $(this)
        .find('.hover-show')
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
      $('.bottom-left').animate(
        {
          left: '1em'
        },
        1000,
        function() {}
      );
      $(this)
        .find('.hover-show')
        .animate(
          {
            opacity: '1'
          },
          1000,
          function() {}
        );
    },
    function() {
      $('.bottom-left').animate(
        {
          left: '-6em'
        },
        1000,
        function() {}
      );
      $(this)
        .find('.hover-show')
        .animate(
          {
            opacity: '0'
          },
          1000,
          function() {}
        );
    }
  );
});
