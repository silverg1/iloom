$(function(){

  $('#header').load('main.html header');
  $('#move').load('main.html #moveHeader');
  $('#allm').load('main.html #allMenuPopup');
  $('#footer').load('main.html footer');
  $('#bnd').load('main.html #blind');
  $('#gm').load('main.html #gnbM', function(){
    // gnbM

    var docHeight = $(document).height();
    $('#gnbM').css('height',docHeight);

    $('.mobile a').on('click',function(){
      $('#allMenuPopup').hide();
      $('#blind').css('display','block');
      $('#gnbM').animate({'marginLeft': '0px'}, {duration: 500});
      return false;
    });

    $('#blind, #close').on('click',function(){
      $('#gnbM').animate({'marginLeft': '-250px'}, {
        duration: 500,
        complete: function(){
          $('#blind').css('display','none');
        }
      });
    });

    $('#gMenu>li').on('click',function(){
      $(this).children('.lMenu').slideToggle(200).end().siblings('li').children('.lMenu').slideUp(200);
      $(this).children('.gMenus').toggleClass('rotate').end().siblings('li').children('.gMenus').removeClass('rotate');
    });

  });

});
