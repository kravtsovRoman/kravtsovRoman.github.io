$(document).ready(function(){


 $(window).scroll(function() {
  if ($(this).scrollTop() > 125) {
    $(".header-top").addClass("header-top-fixed");
    $(".header-top .buttons a").addClass("header-buttons-fixed");
    $("header .header-top .buttons").addClass("header-burger-fixed");
    $("header .logo").addClass("logo-fixed");
    $("header .nav-menu").addClass("menu-fixed");
  }
  else{
    $(".header-top").removeClass("header-top-fixed");
    $(".header-top .buttons a").removeClass("header-buttons-fixed");
    $("header .header-top .buttons").removeClass("header-burger-fixed");
    $("header .logo").removeClass("logo-fixed");
    $("header .nav-menu").removeClass("menu-fixed");        
  }
});



  //Burger menu в моб. версии
  $('#burger_check+label').on('click', function(event){
    $('.nav-menu').fadeToggle(200);
    event.stopPropagation();
  });

  //Anchors
  $("#anhcors").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

//Animate number 
$(window).on("scroll", function() {

  var hight = $('#digits').offset().top;

  if ($(window).scrollTop() > hight - 800) {
    var time = 3000;

    $('#num1').animate({ num: 12}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });

    $('#num2').animate({ num: 1288}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });

    $('#num3').animate({ num: 250000}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });
    $('#num4').animate({ num: 7}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0) + '%';
      }
    }); 
  };
});
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
