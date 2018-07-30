     
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
    $("header .nav-menu li").addClass("menu-fixed");
    $("header .reg-button").addClass("button-fixed");
  }
  else{
    $(".header-top").removeClass("header-top-fixed");
    $("header .logo").removeClass("logo-fixed");
    $("header .nav-menu li").removeClass("menu-fixed");
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
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
      	arrows: false,
      	slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
      }
    },
  ]
	});
});
