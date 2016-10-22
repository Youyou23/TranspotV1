$( document ).ready(function() {
      $('.nav').hover(function() {
        $( this ).children('.nav-img').addClass('img-fade');
      },
      function() {
        $( this ).children('.nav-img').removeClass('img-fade');
});
});
