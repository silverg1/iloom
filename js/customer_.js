$(function(){

// customer

  $('.cstMenu:nth-child(2), .customerM span:first-child').click(function(){
    $(this).addClass('cstChoice');
    $('.cstMenu, .customerM span').not(this).removeClass('cstChoice');
    $('.cstm').show();
    $('.cstContainer>div').not('.cstm').hide();
  });

  $('.cstMenu:nth-child(3), .customerM span:nth-child(2)').click(function(){
    $(this).addClass('cstChoice');
    $('.cstMenu, .customerM span').not(this).removeClass('cstChoice');
    $('.notice').show();
    $('.cstContainer>div').not('.notice').hide();
  });

  $('.cstMenu:nth-child(4), .customerM span:nth-child(3)').click(function(){
    $(this).addClass('cstChoice');
    $('.cstMenu, .customerM span').not(this).removeClass('cstChoice');
    $('.as').show();
    $('.cstContainer>div').not('.as').hide();
  });

  $('.cstMenu:nth-child(5), .customerM span:nth-child(4)').click(function(){
    $(this).addClass('cstChoice');
    $('.cstMenu, .customerM span').not(this).removeClass('cstChoice');
    $('.move').show();
    $('.cstContainer>div').not('.move').hide();
  });

  $('.cstMenu:nth-child(6), .customerM span:nth-child(5)').click(function(){
    $(this).addClass('cstChoice');
    $('.cstMenu, .customerM span').not(this).removeClass('cstChoice');
    $('.oneOnOne').show();
    $('.cstContainer>div').not('.oneOnOne').hide();
  });

  $('.ctsSbj').click(function(){
    var thisCts = $(this).next('.contents').find('div');
    thisCts.slideToggle(300);
    $('.contents').find('div').not(thisCts).slideUp(300);
  });

  $('.asMenu td:first-child').click(function(){
    $(this).addClass('asMenuChoice');
    $('.asMenu td').not(this).removeClass('asMenuChoice');
    $('.asBase').show();
    $('.asc').not('.asBase').hide();
  });

  $('.asMenu td:nth-child(2)').click(function(){
    $(this).addClass('asMenuChoice');
    $('.asMenu td').not(this).removeClass('asMenuChoice');
    $('.asFee').show();
    $('.asc').not('.asFee').hide();
  });

  $('.asMenu td:nth-child(3)').click(function(){
    $(this).addClass('asMenuChoice');
    $('.asMenu td').not(this).removeClass('asMenuChoice');
    $('.asProcess').show();
    $('.asc').not('.asProcess').hide();
  });

  $('.asMenu td:nth-child(4)').click(function(){
    $(this).addClass('asMenuChoice');
    $('.asMenu td').not(this).removeClass('asMenuChoice');
    $('.asPeriod').show();
    $('.asc').not('.asPeriod').hide();
  });

  $('.cstContainer button').not('.bsBtn button').click(function(){
    var cf_login = confirm('로그인이 필요합니다. 로그인하시겠습니까?');
    if (cf_login) {
      $(location).attr('href','login.html');
    } else {}
  });




// aboutiloom

  $('.bsBtn button:first-child').click(function(){
    $(this).addClass('bsChoice');
    $('.bsBtn button').not(this).removeClass('bsChoice');
    $('.bs_self').show();
    $('.bs_eco').hide();
  });

  $('.bsBtn button:nth-child(2)').click(function(){
    $(this).addClass('bsChoice');
    $('.bsBtn button').not(this).removeClass('bsChoice');
    $('.bs_eco').show();
    $('.bs_self').hide();
  });





});
