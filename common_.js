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



// gnbM

var docHeight = $(document).height();
$('#gnbM').css('height',docHeight);

$('.mobile a').click(function(){
  $('#allMenuPopup').hide();
  $('#blind').css('display','block');
  $('#gnbM').animate({'marginLeft': '0px'}, {duration: 500});
  return false;
});

$('#blind, #close').click(function(){
  $('#gnbM').animate({'marginLeft': '-250px'}, {
    duration: 500,
    complete: function(){
      $('#blind').css('display','none');
    }
  });
});

$('#gMenu>li').click(function(){
  $(this).children('.lMenu').slideToggle(200).end().siblings('li').children('.lMenu').slideUp(200);
  $(this).children('.gMenus').toggleClass('rotate').end().siblings('li').children('.gMenus').removeClass('rotate');
});

});
