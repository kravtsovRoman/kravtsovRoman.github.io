$(document).ready(function(){ // ready

  // Fixed header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 25) {
      $(".header-top").addClass("header-top-scroll");
      $(".header .logo").addClass("logo-scroll");
    }
    else{
      $(".header-top").removeClass("header-top-scroll");
      $(".header .logo").removeClass("logo-scroll");    
    }
  });

  //Burger menu в моб. версии
    $('#burger_check+label').on('click', function(event){
      $('.nav-menu').fadeToggle(200);
      event.stopPropagation();
    });

    //Anchors
  $(".anhcors").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top -80}, 1000);
  });



  //modalWindow
  // $('.openModal').on('click', function(){
  //   $('.modalWindow').fadeIn();
  // });


  // $('.close').on('click', function(){
  //   $('.modalWindow').fadeOut();
  // });
  
}); // ready END


