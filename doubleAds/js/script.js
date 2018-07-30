$(document).ready(function(){ // ready

// Range slider
  $("#rangeslider").ionRangeSlider({
    type: "single",
    min: 0,
    max: 1000,
    grid: true,
    step: 100,
    values: [0, 100, 300, 500, 700, 900, '>1000']
  });

  $("#rangeslider-2").ionRangeSlider({
    type: "single",
    min: 0,
    max: 1000,
    grid: true,
    step: 100,
    values: [0, 100, 500, 1000, 1500, '>2000']
  });

  // Fixed header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 230) {
      $(".header").addClass("header-scroll");
      $(".wrapper").addClass("wrapper-scroll");
    }
    else{
      $(".header").removeClass("header-scroll");
      $(".wrapper").removeClass("wrapper-scroll");   
    }
  });

  //Burger menu в моб. версии
    $('#burger_check+label').on('click', function(event){
      $('.anhcors').fadeToggle(200);
      // event.stopPropagation();
    });

    //Anchors
  $(".anhcors").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top -80}, 1000);
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
  $('.openModal-1').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-1').fadeIn();
  });
  $('.openModal-2').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-2').fadeIn();
  });
   $('.openModal-3').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-3').fadeIn();
  });
   $('.openModal-4').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-4').fadeIn();
  });
   $('.openModal-5').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-5').fadeIn();
  });
   $('.openModal-6').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-6').fadeIn();
  });
   $('.openModal-7').on('click', function(){
    $('.modalWindow').fadeOut();
    $('.modalWindow-7').fadeIn();
  });


  $('.close').on('click', function(){
    $('.modalWindow').fadeOut();
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


