/*	PRINCIPAL
#
#	FABRIZIO FEITOSA
#	fabriziofeitosa.me
#
#   TUDO AQUI É NECESSÁRIO PARA O FUNCIONAMENTO
#
*/

jQuery(document).ready(function ($) {

  "use strict";

  /*=========================== scroll background ===========================*/

  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 50) {
      $('.navbar').addClass('active_sc');
    }
    else {
      $('.navbar').removeClass('active_sc');
    };

  });

  /*=========================== close scroll background ===========================*/

  /*=========================== screenshot app ===========================*/

  var owls = $("#screenshot-owl");
  owls.owlCarousel({

    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    items: 4,
    loop: true,
    center: false,
    margin: 20,
    stagePadding: 0,
    dots: true,
    nav: false,

    animateOut: 'fadeOutDown',
    animateIn: 'fadeInDown',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      768: {
        items: 4,
        nav: false,
        loop: true
      }
    }
  });

  /*=========================== screenshot app ===========================*/

  /*=========================== smooth menu ===========================*/
  $('body').scrollspy({ target: ".navbar", offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $("#xenav a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
  /*=========================== smooth menu ===========================*/
  
});