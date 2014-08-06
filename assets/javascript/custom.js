  $(window).load(function(){
    var $container = $('.thumb-nails').imagesLoaded(function(){;
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
  });
 
    $('.skillCategories li a').click(function(){
        $('.skillCategories .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

$(document).ready(function(){
  $('.fromTheTop').addClass('animated fadeInDown');
$('#mainImage').delay(800).addClass('animated fadeInLeft');



// Animations
var ANIMATION_ENDED_EVENTS = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var name1 = $('.name1');
var name2 = $('.name2');
var enter = $('.enter');

name1.addClass('animated bounceInDown');
name2.hide();
enter.hide();
name1.bind(ANIMATION_ENDED_EVENTS, function(){
  name2.show().addClass('animated bounceInDown');
  name2.bind(ANIMATION_ENDED_EVENTS, function(){
    enter.show().addClass('animated bounceInLeft');  
  })
});
// End of animations

enter.on('click', function(){
window.location.href="index.html";
});
});


	$('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 800);
           return false;
         });
      }
    }
  });

