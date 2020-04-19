$(function(){
  function buildHTML(message){
    if (message.image){
      var html = 
    ` <div class = "message-list" data-message-id = ${message.id}>
        <div class = "message-list__top">
          <div class = "message-list__user-name">
            ${message.user_name}
          </div>
          <div class = "message-list__created_at">
            ${message.created_at}
          </div>
        </div>
        <div class = "message-list__content">
          ${message.content}
        </div>
        <div class = "message-list__image">
          <img class = "message-list__img" src = ${message.image}>
        </div>
      </div>`
      return html;
    }else{
      var html =
    ` <div class = "message-list" data-message-id = ${message.id}>
        <div class = "message-list__top">
          <div class = "message-list__user-name">
            ${message.user_name}
          </div>
          <div class = "message-list__created_at">
            ${message.created_at}
          </div>
        </div>
        <div class = "message-list__content">
          ${message.content}
        </div>
        <div class = "message-list__image">
        </div>
      </div>`
      return html;
    }
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html);
      $('#new_message')[0].reset();
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      $('.form-input__btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
  
  var reloadMessages = function() {
    if (document.location.href.match(/\/groups\/\d+\/events\/\d+/)) {
    var last_message_id = $('.message-list:last').data("message-id");
    var event_id = $(".main-top").data("event-id");
    $.ajax({
        url: event_id + '/api/messages',
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        if (messages.length !== 0) {
          var insertHTML = '';
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          $('.message').append(insertHTML);
          $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
        }
      })
      .fail(function() {
        alert('error');
      });
    };

  }
  setInterval(reloadMessages, 7000);
  
});


