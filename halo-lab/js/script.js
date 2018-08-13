     
$(document).ready(function(){

	  //Tabs
    $(function() {
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    });

  //Burger menu в моб. версии
  $('#burger_check+label').on('click', function(event){
    $('.header-top-block').fadeToggle(200);
    event.stopPropagation();
  });

    //Anchors
    $(".anhcors").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    });
    
  });