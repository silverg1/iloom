$(function(){

// event & news
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


// store
  $('.comeBtn').click(function(){
    $(this).parent().parent().siblings('.come').slideToggle(300);
  });
  $('.moreBtn button').click(function(){
    $(this).hide();
    $('.more').show();
  });



// login

$('.log_chk img, .log_chk p').click(function(){
  $('.log_chk img').toggleClass('chk');
});
$('.nonMember').click(function(){
  $('.mem').hide();
  $('.nonmem').show();
  $(this).addClass('memchk');
  $('.member').removeClass('memchk');
});
$('.member').click(function(){
  $('.nonmem').hide();
  $('.mem').show();
  $(this).addClass('memchk');
  $('.nonMember').removeClass('memchk');
});

});
