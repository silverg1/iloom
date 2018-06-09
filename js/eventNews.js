$(function(){

  $('#evBtn2').click(function(){
    $('.evList.show').hide();
    $('.evList.hide').show();
    $(this).addClass('choose');
    $('#evBtn1').removeClass('choose');
  });

  $('#evBtn1').click(function(){
    $('.evList.hide').hide();
    $('.evList.show').show();
    $(this).addClass('choose');
    $('#evBtn2').removeClass('choose');
  });

});
