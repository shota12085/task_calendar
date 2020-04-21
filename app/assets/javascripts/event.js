$(function(){
  $(".header-right__icon1").hover(function(){
    $(".header-right__info-icon1").show();
  })
  $(".header-right__icon1").mouseleave(function () { 
    $(".header-right__info-icon1").hide();     
    });

  $(".header-right__icon2").hover(function(){
    $(".header-right__info-icon2").show();
  })
  $(".header-right__icon2").mouseleave(function () { 
    $(".header-right__info-icon2").hide();     
    });

  $(".header-right__icon3").hover(function(){
    $(".header-right__info-icon3").show();
  })
  $(".header-right__icon3").mouseleave(function () { 
    $(".header-right__info-icon3").hide();     
    });
  })

$(function(){
  $(".show-content__e-icon").on('click',function(){
    $("#new-content").show();
  })
  $(".back-icon").on('click',function(){
    $(".new-content").hide();
  })
  $(".back-icon").on('click',function(){
    $(".edit-content").hide();
  })
})
$(function(){
  $(".day-time__icon").on('click',function(){
    $(".new-content").show();
  })
  $(".back-icon").on('click',function(){
    $(".new-content").hide();
  })
})

$(function(){
  $(".side-icon").click(function(){
    $(".side-bar").animate({width: 'toggle'}, 200);
  })
  $(".btn__tab2").click(function(){
    $(".side-bar").animate({width: 'toggle'}, 200);
    $(".calendar-top").fadeToggle();
    $(".time-content").fadeToggle();
  })

  $(".member-icon").click(function(){
    $(".member-list").fadeToggle(400);
  })

})

$(function(){
  $(".group-list").hover(function(){
    $(".group-list__name").slideDown(400);
  });
  
  $(".group-list").mouseleave(function () { 
    $(".group-list__name").slideUp(400);     
  });

})


  
  

