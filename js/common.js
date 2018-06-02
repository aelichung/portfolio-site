$(function() {
  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('arrow');
    $('.click-show').toggle('fast');
  });
});
