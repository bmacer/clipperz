$(function() {
  var header = $(".nav-link");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
          header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
  });
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
});

