$(function() {
  $('.slider').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 1000,
      fade: true,
      pauseOnHover: false,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true
  });

  $('.slick-dots li').on('mouseover', function() {
    $('.slider').slick('goTo', $(this).index());
  });
});

$(function(){

  function addUser(user) {
      let html = `
      <div class = "all-user__list">
        <div class = "all-user__list-member">
          <a href = "/users/${user.id}">
            <img src = ${user.image} class = "all-user__image">
          </a>
          <a href = "/users/${user.id}">
          <div class = "all-user__name">
            ${user.name}
          </div>
          </a>
        </div>
      </div>
    `;
    $("#user-search__result").append(html);
  }
  function addUserDef(user) {
      let html = `
      <div class = "all-user__list">
        <div class = "all-user__list-member">
          <a href = "/users/${user.id}">
            <img src = "/images/default.jpg" class = "all-user__image">
          </a>
          <a href = "/users/${user.id}">
          <div class = "all-user__name">
            ${user.name}
          </div>
          </a>
        </div>
      </div>
    `;
    $("#user-search__result").append(html);
  }
  
  function addNoUser() {
      let html = `
      <div class = "all-user__list">
      <div class = "all-user__list-member">
        <p class = "no-user">該当ユーザーが見つかりません</p>
      </div>
    </div>
    `;
    $("#user-search__result").append(html);
  }
  $("#user-search__input").on("keyup", function() {
    let input = $("#user-search__input").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      $("#user-search__result").empty();
      
      if (users.length !== 0) {
        users.forEach(function(user) {
          if (user.image){
            addUser(user);
          }else{
            addUserDef(user);
          }
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });
  });
})



$(function(){
  $(".top-main__signin").on('click', function(){
    $("#signin-page").fadeIn(200);
  })
  $(".back-icon").on('click',function(){
    $("#signin-page").fadeOut(200);
  })
  
  
  $(".top-main__login").on('click', function(){
    $("#account-page").fadeIn(200);
  })
  $(".back-icon").on('click',function(){
    $("#account-page").fadeOut(200);
  })
})


$(function(){
  
  $(".user-content__edit").on('click', function(){
    $(".account-page__edit").fadeIn(200);
  })
  $(".back-icon").on('click',function(){
    $(".account-page__edit").fadeOut(200);
  })

  $(".event-tag__friend").on('click', function(){
    $(".event-tag__friend").css('background-color','#ddd');
    $(".event-tag__user").css('background-color','#ffffff');
    $(".event-main").fadeOut(200);
    $(".user-show").fadeIn(200);
  })

  $(".event-tag__user").on('click', function(){
    $(".event-tag__user").css('background-color','#ddd');
    $(".event-tag__friend").css('background-color','#ffffff');
    $(".user-show").fadeOut(200);
    $(".event-main").fadeIn(200);
  })


  $(".all-user__tag--follow").on('click', function(){
    $(".all-user__tag--follow").css('background-color','#ddd');
    $(".all-user__tag--follower").css('background-color','#ffffff');
    $(".all-user__follow-list").show(200);
    $(".all-user__follower-list").hide(200);
  })

  $(".all-user__tag--follower").on('click', function(){
    $(".all-user__tag--follower").css('background-color','#ddd');
    $(".all-user__tag--follow").css('background-color','#ffffff');
    $(".all-user__follower-list").show(200);
    $(".all-user__follow-list").hide(200);
  })

  
})
$(function(){

  $(".group-userlist").on('click', function(){
    $(".all-user__content").hide(200);
    $(".all-user__main").show(400);
  })

  $(".group-followlist").on('click', function(){
    $(".all-user__main").hide(200);
    $(".all-user__content").show(400);
  })
})

$(function(){
  $(".btn__tab").on('click', function(){
    $("#group").fadeToggle();
    $(".user-main").fadeToggle();
    $(".calendar-top").fadeToggle();
    $(".time-content").fadeToggle();
    
  })
  $(".btn__tab3").on('click', function(){
    $("#group").fadeToggle();
    
  })
 
})

