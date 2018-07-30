     
$(document).ready(function(){

   //Burger menu в моб. версии
  $('#burger_check+label').on('click', function(event){
    $('.nav-menu').fadeToggle(200);
    event.stopPropagation();
  });


 $(window).scroll(function() {
  if ($(window).scrollTop() >= 5) {
    $(".header-top").addClass("header-top-fixed");
    $("header .logo").addClass("logo-fixed");
    $("header .nav-menu li").addClass("menu-fixed");
    $("header .reg-button").addClass("button-fixed");
    // console.log($(window).scrollTop());
  }
  else{
    $(".header-top").removeClass("header-top-fixed");
    $("header .logo").removeClass("logo-fixed");
    $("header .nav-menu li").removeClass("menu-fixed");
    $("header .reg-button").removeClass("button-fixed");  
    // console.log($(window).scrollTop());      
  }
});


  //Anchors
  $(".anhcors").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top -100}, 1000);
  });

});