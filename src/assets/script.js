var time = new Date();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(time);
console.log(new Date(tomorrow));

$(document).ready(function(){
  $('.datepicker').datepicker({
    defaultDate: time,
    maxDate: tomorrow,
    format: 'dd/mm/yyyy'
  });
  $('.sidenav').sidenav();
  $('#sidenav-1').sidenav({ edge: 'left' });


  $('.nav-content a').each(function () {
    $(this).click(function () {
      cycle_active($(this).attr('id'))
    })
  });

  function cycle_active(id) {
    $('.nav-content a').each(function () {
      if ( $(this).hasClass('active')){
        $(this).removeClass('active transparent')
      }
      $("#"+id).addClass('active transparent')
    })
  }
});



