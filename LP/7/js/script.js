     
$(document).ready(function(){

  //Anchors
  $("#anhcors").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

    //Animate number row
    var time = 6000;

    $('#num1').animate({ num: 10}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });

    $('#num2').animate({ num: 230000}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });

    $('#num3').animate({ num: 534620}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });
    $('#num4').animate({ num: 261000}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
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

//object
var accordion = new Accordion($('.accordion-menu'), false);
