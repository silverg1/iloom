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



// join

$('.joinBtn.lets').click(function(){
  $('.joinHead li').not(':nth-child(2)').removeClass('memchk');
  $('.joinHead li:nth-child(2)').addClass('memchk');
  $('.joinBox').css('height','780px');
  $('.logBody>div').not('.join2').hide();
  $('.join2').show();
});

$('.joiningBtn').click(function(){
  $('.joinHead li').not(':first-child').removeClass('memchk');
  $('.joinHead li:first-child').addClass('memchk');
  $('.joinBox').css('height','600px');
  $('.logBody>div').not('.join1').hide();
  $('.join1').show();
});

$('.joiningBtn.red').click(function(){
  $('.joinHead li').not(':nth-child(3)').removeClass('memchk');
  $('.joinHead li:nth-child(3)').addClass('memchk');
  $('.joinBox').css('height','850px');
  $('.logBody>div').not('.join3').hide();
  $('.join3').show();
});

$('.joiningBtn.red2').click(function(){
  $('.joinHead li').not(':nth-child(4)').removeClass('memchk');
  $('.joinHead li:nth-child(4)').addClass('memchk');
  $('.joinBox').css('height','600px');
  $('.logBody>div').not('.join4').hide();
  $('.join4').show();
});

if ($("input[value='man']").is('checked') == true) {
  $("input[value='woman']").removeAttr('checked');
} else if ($("input[value='woman']").is('checked') == true) {
  $("input[value='man']").removeAttr('checked');
}

$('.agree label').click(function(){
  if ($('#agree_all').prop('checked')) {
    $('#agree_all').prop('checked',false);
    $("input[id='agree']").prop('checked',false);
  } else {
    $('#agree_all').prop('checked',true);
    $("input[id='agree']").prop('checked',true);
  }
});

$('#agree_all').click(function(){
  if ($(this).prop('checked')) {
    $("input[id='agree']").prop('checked',true);
  } else {
    $("input[id='agree']").prop('checked',false);
  }
});



// find

$('.pwfind').click(function(){
  $('.idf').hide();
  $('.pwf').show();
  $(this).addClass('memchk');
  $('.idfind').removeClass('memchk');
});

$('.idfind').click(function(){
  $('.pwf').hide();
  $('.idf').show();
  $(this).addClass('memchk');
  $('.pwfind').removeClass('memchk');
});






});
