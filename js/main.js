$(function(){

  /* mainBanner */

  var num = 0;
  var len = $('.fadeBanner a').length;
  $('.fadeBanner').find('a:not(:first)').hide();

  $('.rightBtn').click(function(){
    next();
  });
  $('.leftBtn').click(function(){
    prev();
  });

  function next(){
    num++;
    if(num > len-1){
      num=0;
    }
    $('.fadeBanner a').fadeOut(1000);
    $('.fadeBanner a').eq(num).stop().fadeIn(1000);
    $('.cntBanner').text((num+1) + ' of 5');
  }

  function prev(){
    num--;
    if(num < 0){
      num=len-1;
    }
    $('.fadeBanner a').fadeOut(1000);
    $('.fadeBanner a').eq(num).stop().fadeIn(1000);
    $('.cntBanner').text((num+1) + ' of 5');
  }

  var timer = setInterval(function(){next()},4000);

  $('.fadeBanner, .rightBtn img, .leftBtn img').hover(function(){
    clearInterval(timer);
  }, function(){
    timer = setInterval(function(){next()},3000)
  });

});
