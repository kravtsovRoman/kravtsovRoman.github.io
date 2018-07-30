     
$(document).ready(function(){

		//Burger menu в моб. версии
		$('#burger_check+label').on('click', function(event){
			$('.nav-menu').fadeToggle(200);
			event.stopPropagation();
		});

  //Header - top fixed
  $(window).scroll(function() {
  	if ($(window).scrollTop() >= 5) {
  		$(".header-top").addClass("header-top-fixed");
  		$("header .logo").addClass("logo-fixed");
  		$("header .nav-menu").addClass("menu-fixed");
  		$("header .reg-button").addClass("button-fixed");
  	}
  	else{
  		$(".header-top").removeClass("header-top-fixed");
  		$("header .logo").removeClass("logo-fixed");
  		$("header .nav-menu").removeClass("menu-fixed");
  		$("header .reg-button").removeClass("button-fixed");
  	}
  });

  //Anchors
  $(".anhcors").on("click","a", function (event) {
  	event.preventDefault();
  	var id  = $(this).attr('href'),
  	top = $(id).offset().top;
  	$('body,html').animate({scrollTop: top -80}, 1000);
  });

	//Slider
	$('.slider').slick({
		speed: 500,
		dots: true,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		]
	});

	//Slider 2
	$('.slider-footer').slick({
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 610,
			settings: {
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 450,
			settings: {
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		]
	});
});