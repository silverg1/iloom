$(function(){

  // header

  $(".innerMenu").hover(function(){
    $(this).prev().css("color","#C90000");
  },function(){
    $(this).prev().css("color","black");
  });

  // allMenuPopup

  $('.popup a').click(function(){
    $('#allMenuPopup').show();
    return false;
  });
  $('.popup.moveHeader a').click(function(){
    $('#allMenuPopup').css('position','fixed');
  })
  $('.close').click(function(){
    $('#allMenuPopup').hide();
  });



// moveHeader

$(window).scroll(function(){
  if( $(document).scrollTop() > '85' ){
    $('#moveHeader').css('display','block');
  }else {
    $('#moveHeader').css('display','none');
  }
});

});
