$(function () {


  $('#calendar').fullCalendar({
    height: window.innerHeight - 100, 
    windowResize: function () { 
      $('#calendar').fullCalendar('option', 'height', window.innerHeight - 100);
    },
      events: {
          url: 'events.json'
          },
      dayClick : function () {
        $('.new-content').show();
      },
      
      firstDay:1,
      //   navLinks: true,
      selectable: true,
      selectHelper: true,
      
      titleFormat: 'YYYY年 M月',
      dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
      header: {
          left: 'month, agendaWeek, agendaDay',
          center: 'title',
          right: 'prev,next today'
        },
        defaultTimedEventDuration: '03:00:00',
        buttonText: {
          prev: '',
          next: '',
          today: '当日に戻る',
          month: 'マンスリー',
          week: 'ウィークリー',
          day: '今日の予定'
        },
        editable: true,
        timeFormat: "HH:mm",
        eventColor: '#87cefa',
        eventTextColor: '#000000',
        eventRender: function(event, element) {
        element.css("font-size", "0.8em");
        element.css("color", "#ffffff");
        element.css("padding", "5px");
        element.css("background-color", "#57B7B7")
      }
        
    });
    
});
