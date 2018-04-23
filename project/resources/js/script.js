var map = new GMaps({
  div: '.map',
  lat: 42.843887,
  lng: 74.269880,
});

map.addMarker({
  lat: 42.843887,
  lng: 74.26988,
  title: 'OAO <<АК-Куу>>',
  infoWindow: {
    content: '<p>OAO <<АК-КУУ>></p>'
  }
});




$(document).ready(function(){
$('#menu-btn').click(function(){  
   $('nav').slideToggle(400); 
   if ($(this).hasClass('not-active')) {
    $(this).addClass('is-active').removeClass('not-active');
   }
  
  else{
    setTimeout(function(){
     $('.is-active').addClass('not-active').removeClass('is-active')
    },600)   
   }  
  });
})

/* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });