  //  Sticky Menu

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.sticky_header').addClass('menu_fixed');
    } else {
      $('.sticky_header').removeClass('menu_fixed');
    }
  });


  //   banner
  var swiper = new Swiper(".banner_slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".destination_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      479: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".places_slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
    },
    
  });

  var swiper = new Swiper(".review_slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
    },
  });

  var swiper = new Swiper(".partner_slider", {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      479: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

  // scroll

  // $(document).ready(function() {
  //   $('#scroll-me a').offsetScroller({offsetPixels: 182});
  //   $('.box a').offsetScroller({animationSpeed: 2000});
  //   $().offsetScroller.scrollToHash(window.location.hash, {offsetPixels: 92});
  // });

