// SVG fallback
//--------------
function svgFallback() {
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }
}

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 300, 'swing', function () {
      window.location.hash = target;
    });
  });
});
