$(document).ready(function(){ // ready

  // Fixed header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 25) {
      $(".header").addClass("header-scroll");
      $(".header .logo-image").addClass("logo-image-scroll");

    }
    else{
      $(".header").removeClass("header-scroll");
      $(".header .logo-image").removeClass("logo-image-scroll");    
    }
  });

  //Animate number 
  $(window).on("scroll", function() {

    var height = $('.models-statistic').offset().top -850;

    if ($(window).scrollTop() > height) {
      var time = 5000;

      $('#num1').animate({ num: 1493}, {
        duration: time,
        step: function (num){
          this.innerHTML = (num + 0).toFixed(0);
        }
      });
      $('#num2').animate({ num: 1056}, {
        duration: time,
        step: function (num){
          this.innerHTML = (num + 0).toFixed(0);
        }
      });
      $('#num3').animate({ num: 16}, {
        duration: time,
        step: function (num){
          this.innerHTML = (num + 0).toFixed(0);
        }
      });
    };
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


  // modalWindow
  $('.openModal').on('click', function(){
    $('.modalWindow').fadeIn();
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


