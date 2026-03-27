(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		// START MENU JS
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header-area').addClass('menu-shrink');
			} else {
				$('.header-area').removeClass('menu-shrink');
			}
		});

		$(window).on('scroll',function() {

			// Main banner slider
			$('.main-banner-slider').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				smartSpeed: 5000,
				autoplayHoverPause: true,
				autoplay: false,
				animateOut: 'slideOutDown',
				animateIn: 'fadeInUp',
				margin: 0,
				mouseDrag: false,
				items: 1,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
			});

			$(".main-banner-slider").on("translate.owl.carousel", function(){
				$(".main-banner-slider h2, .main-banner-slider p").removeClass("animated fadeInUp").css("opacity", "0");
				$(".main-banner-slider .banner-btn").removeClass("animated fadeInDown").css("opacity", "0");
			});
			
			$(".main-banner-slider").on("translated.owl.carousel", function(){
				$(".main-banner-slider h2, .main-banner-slider p").addClass("animated fadeInUp").css("opacity", "1");
				$(".main-banner-slider .banner-btn").addClass("animated fadeInDown").css("opacity", "1");
			});

			// Project Slides
			$('.project-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				smartSpeed: 2000,
				margin: 30,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 4
					}
				}
			});

			// Feedback Slides
			$('.feedback-slides').owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				margin: 30,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
				items: 1,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
			});

			// Partner Slides
			$('.partner-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				smartSpeed: 2000,
				margin: 30,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 2
					},
					576: {
						items: 3
					},
					768: {
						items: 4
					},
					1200: {
						items: 6
					}
				}
			});

			// Team Slides
			$('.team-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				smartSpeed: 2000,
				margin: 15,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 5
					}
				}
			});

			// Blog Slides
			$('.blog-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				smartSpeed: 2000,
				margin: 30,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});

			// Services Details Slides
			$('.services-image-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				items: 1,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
			});

			// Gallery Slider
			/*==============================================================*/
			$('.single-blog-post-slider').owlCarousel({
				items:1,
				loop: true,
				autoplay:true,
				nav: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				dots: false,
				navText: [
					"<i class='fa fa-angle-left'></i>",
					"<i class='fa fa-angle-right'></i>"
				],
			});

			// Feedback Slides
			$('.feedback-slides-two').owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				margin: 30,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 2
					}
				}
			});

			// Testimonials Slides
			$('.testimonials-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				items: 1,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: false,
			});

			$('.services-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});
		});

		// Video Popup
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
		});

		// Go to Top
        $(function(){
            //Scroll event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });  
            //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});

		// Odometer JS
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

	});

	// Lax JS
	window.onload = function() {
		lax.setup() // init
		const updateLax = () => {
			lax.update(window.scrollY)
			window.requestAnimationFrame(updateLax)
		}
		window.requestAnimationFrame(updateLax)
	}

	// Preloader JS
    jQuery(window).on('load', function() {
        $('.uk-preloader').fadeOut();
	});
	
	// Main banner slider
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Gunter_Slider.default', function($scope, $){
			
			$('.main-banner-slider').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				smartSpeed: 5000,
				autoplayHoverPause: true,
				autoplay: false,
				animateOut: 'slideOutDown',
				animateIn: 'fadeInUp',
				margin: 0,
				mouseDrag: false,
				items: 1,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
			});

			$(".main-banner-slider").on("translate.owl.carousel", function(){
				$(".main-banner-slider h2, .main-banner-slider p").removeClass("animated fadeInUp").css("opacity", "0");
				$(".main-banner-slider .banner-btn").removeClass("animated fadeInDown").css("opacity", "0");
			});
			
			$(".main-banner-slider").on("translated.owl.carousel", function(){
				$(".main-banner-slider h2, .main-banner-slider p").addClass("animated fadeInUp").css("opacity", "1");
				$(".main-banner-slider .banner-btn").addClass("animated fadeInDown").css("opacity", "1");
			});
		});
	});

	// Project Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Projects.default', function($scope, $){
			
			$('.project-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				smartSpeed: 2000,
				margin: 30,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 4
					}
				}
			});
		});
	});

	// Feedback Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Testimonial.default', function($scope, $){
			
			$('.feedback-slides').owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				margin: 30,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
				items: 1,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
			});
		});
	});

	// Partner Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Gunter_Partner.default', function($scope, $){
			$('.partner-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				smartSpeed: 2000,
				margin: 30,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 2
					},
					576: {
						items: 3
					},
					768: {
						items: 4
					},
					1200: {
						items: 6
					}
				}
			});
		});
	});

	// Blog Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Gunter_Blog_Post.default', function($scope, $){

			$('.blog-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				smartSpeed: 2000,
				margin: 30,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});
		});
	});

	// Team Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Gunter_Team.default', function($scope, $){
			$('.team-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				smartSpeed: 2000,
				margin: 15,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 5
					}
				}
			});
		});
	});

	// Services Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Services.default', function($scope, $){
			$('.services-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});
		});
	});

	// Odometer JS
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Gunter_Funfacts.default', function($scope, $){	
			$('.odometer').appear(function(e) {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		});
	});

	// Feedback Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Testimonial_Slider.default', function($scope, $){	
			$('.feedback-slides-two').owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				margin: 30,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='flaticon-back'></i>",
					"<i class='flaticon-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					1200: {
						items: 2
					}
				}
			});
		});
	});
	
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
			// Testimonials Slides
			$('.testimonials-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				items: 1,
				smartSpeed: 2000,
				autoplayHoverPause: true,
				autoplay: false,
			});
		});
	});

}(jQuery));