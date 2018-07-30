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

  //Slider           
  $('.slider').slick({
    speed: 500,
    // fade: true,
    dots: true,
  });

   //Accordion
   var Accordion = function(el, multiple) {
    this.el = el || {};
  // more then one submenu open?
  this.multiple = multiple || false;

  var dropdownlink = this.el.find('.dropdownlink');
  dropdownlink.on('click',
    { el: this.el, multiple: this.multiple },
    this.dropdown);


  //modalWindow
  $('.openModal').on('click', function(){
    $('.modalWindow').fadeIn();
  });
  $('.openModal-2').on('click', function(){
    $('.modalWindow-2').fadeIn();
  });


  $('.close').on('click', function(){
    $('.modalWindow').fadeOut();
  });
  $('.close').on('click', function(){
    $('.modalWindow-2').fadeOut();
  });

};

  //Accordion Prototype
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
    $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
        
        $next.slideToggle();
        $this.parent().toggleClass('open');
        
        if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  //Accordion object
  var accordion = new Accordion($('.accordion-menu'), false);

}); // ready END


