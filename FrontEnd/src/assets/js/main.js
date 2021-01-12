AOS.init({
	duration: 800,
	easing: "slide",
});

(function ($) {
	"use strict";

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		},
	};

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: "scroll",
	});

	var fullHeight = function () {
		$(".js-fullheight").css("height", $(window).height());
		$(window).resize(function () {
			$(".js-fullheight").css("height", $(window).height());
		});
	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($("#ftco-loader").length > 0) {
				$("#ftco-loader").removeClass("show");
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$(".product-slider").owlCarousel({
			autoplay: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: [
				'<span class="ion-ios-arrow-back">',
				'<span class="ion-ios-arrow-forward">',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
		$(".carousel-testimony").owlCarousel({
			autoplay: true,
			loop: true,
			items: 1,
			margin: 0,
			stagePadding: 0,
			nav: false,
			navText: [
				'<span class="ion-ios-arrow-back">',
				'<span class="ion-ios-arrow-forward">',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 1,
				},
			},
		});
	};
	carousel();

	// $('nav .dropdown').hover(function(){
	// 	var $this = $(this);
	// 	// 	 timer;
	// 	// clearTimeout(timer);
	// 	$this.addClass('show');
	// 	$this.find('> a').attr('aria-expanded', true);
	// 	// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
	// 	$this.find('.dropdown-menu').addClass('show');
	// }, function(){
	// 	var $this = $(this);
	// 		// timer;
	// 	// timer = setTimeout(function(){
	// 		$this.removeClass('show');
	// 		$this.find('> a').attr('aria-expanded', false);
	// 		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
	// 		$this.find('.dropdown-menu').removeClass('show');
	// 	// }, 100);
	// });

	$("#dropdown04").on("show.bs.dropdown", function () {
		console.log("show");
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $(".ftco_navbar"),
				sd = $(".js-scroll-wrap");

			if (st > 150) {
				if (!navbar.hasClass("scrolled")) {
					navbar.addClass("scrolled");
				}
			}
			if (st < 150) {
				if (navbar.hasClass("scrolled")) {
					navbar.removeClass("scrolled sleep");
				}
			}
			if (st > 350) {
				if (!navbar.hasClass("awake")) {
					navbar.addClass("awake");
				}

				if (sd.length > 0) {
					sd.addClass("sleep");
				}
			}
			if (st < 350) {
				if (navbar.hasClass("awake")) {
					navbar.removeClass("awake");
					navbar.addClass("sleep");
				}
				if (sd.length > 0) {
					sd.removeClass("sleep");
				}
			}
		});
	};
	scrollWindow();

	var counter = function () {
		$("#section-counter").waypoint(
			function (direction) {
				if (
					direction === "down" &&
					!$(this.element).hasClass("ftco-animated")
				) {
					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
						","
					);
					$(".number").each(function () {
						var $this = $(this),
							num = $this.data("number");
						console.log(num);
						$this.animateNumber(
							{
								number: num,
								numberStep: comma_separator_number_step,
							},
							7000
						);
					});
				}
			},
			{ offset: "95%" }
		);
	};
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$(".ftco-animate").waypoint(
			function (direction) {
				if (
					direction === "down" &&
					!$(this.element).hasClass("ftco-animated")
				) {
					i++;

					$(this.element).addClass("item-animate");
					setTimeout(function () {
						$("body .ftco-animate.item-animate").each(function (k) {
							var el = $(this);
							setTimeout(
								function () {
									var effect = el.data("animate-effect");
									if (effect === "fadeIn") {
										el.addClass("fadeIn ftco-animated");
									} else if (effect === "fadeInLeft") {
										el.addClass("fadeInLeft ftco-animated");
									} else if (effect === "fadeInRight") {
										el.addClass("fadeInRight ftco-animated");
									} else {
										el.addClass("fadeInUp ftco-animated");
									}
									el.removeClass("item-animate");
								},
								k * 50,
								"easeInOutExpo"
							);
						});
					}, 100);
				}
			},
			{ offset: "95%" }
		);
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
			"click",
			function (e) {
				e.preventDefault();

				var hash = this.hash,
					navToggler = $(".navbar-toggler");
				$("html, body").animate(
					{
						scrollTop: $(hash).offset().top,
					},
					700,
					"easeInOutExpo",
					function () {
						window.location.hash = hash;
					}
				);

				if (navToggler.is(":visible")) {
					navToggler.click();
				}
			}
		);
		$("body").on("activate.bs.scrollspy", function () {
			console.log("nice");
		});
	};
	OnePageNav();

	// magnific popup
	$(".image-popup").magnificPopup({
		type: "image",
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true,
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
		},
	});

	$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
	});

	$(document).ready(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$("#back-to-top").fadeIn();
			} else {
				$("#back-to-top").fadeOut();
			}
		});
		// scroll body to 0px on click
		$("#back-to-top").click(function () {
			$("#back-to-top").tooltip("hide");
			$("body,html").animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		});

		$("#back-to-top").tooltip("show");
	});

	var goHere = function () {
		$(".mouse-icon").on("click", function (event) {
			event.preventDefault();

			$("html,body").animate(
				{
					scrollTop: $(".goto-here").offset().top,
				},
				500,
				"easeInOutExpo"
			);

			return false;
		});
	};
	goHere();
})(jQuery);

(function ($) {
	$(document).ready(function () {
		$(".main-navbar .dropdown").hover(function (e) {
			// e.preventDefault();
			var $this = $(this);
			var target = $this.data("dropdown");
			$this.addClass("show");
			$this.find("> a").attr("aria-expanded", true);
			$(".main-navbar-dropdown")
				.find("[data-dropdown-target='" + target + "']")
				.addClass("show")
			console.log(this);


	document.getElementById("dropdown_l").onmouseover = function(event) {
  	

  	$(".main-navbar-dropdown").find("[data-dropdown-target='products']").removeClass("show");    
  }
  document.getElementById("dropdown_p").onmouseover = function(event) {
  	
  	$(".main-navbar-dropdown").find("[data-dropdown-target='learn-the-firm']").removeClass("show");    
  
}

	document.getElementById("nav-remove1").onmouseover = function(event) {
  	
  	$(".main-navbar-dropdown").find("[data-dropdown-target='learn-the-firm']").removeClass("show");    
  
  	$(".main-navbar-dropdown").find("[data-dropdown-target='products']").removeClass("show");    
  }

  document.getElementById("nav-remove2").onmouseover = function(event) {
  	
  	$(".main-navbar-dropdown").find("[data-dropdown-target='learn-the-firm']").removeClass("show");    
  
  	$(".main-navbar-dropdown").find("[data-dropdown-target='products']").removeClass("show");    
  }
    document.getElementById("nav-remove3").onmouseover = function(event) {
  	
  	$(".main-navbar-dropdown").find("[data-dropdown-target='learn-the-firm']").removeClass("show");    
  
  	$(".main-navbar-dropdown").find("[data-dropdown-target='products']").removeClass("show");    
  }

  });
// $(".dropdown-menu").on("click", "a, span", function () {
// 			// $(".main-navbar .dropdown.show").removeClass("show");
// 			$(".main-navbar .dropdown").find("> a").attr("aria-expanded", false);
// 			$(".main-navbar-dropdown")
// 				.find(".dropdown-menu.show")
// 				.removeClass("show");
// 				$this.find('.dropdown-menu').removeClass('show');
// 		});


					
		$(".main-navbar .dropdown").hover( function () {
			console.log("second click");
		});

		$(".custom-children-img").on("click", function() {
			console.log("logo");
		});
			

			// ipad	



		$('a.taphover').on('touchstart', function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('a.taphover').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
})

		const mq = window.matchMedia( "(min-width: 1200px)" );
		if (mq.matches) {


// window width is at least 500px
} else {
// window width is less than 500px
}
  
	});

})(jQuery);
