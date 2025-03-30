$(function(){
    // tab
    $('.tab_link ul li a').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    // popup
    $('.popup1').hide();
    $('.product_wrap_b').click(function(){
        $('.popup1').fadeIn(0)
    });
    $('#popup_close1').click(function(){
        $('.popup1').fadeOut(0)
    });
    $('.popup2').hide();
    $('.product_wrap_p').click(function(){
        $('.popup2').fadeIn(0)
    });
    $('#popup_close2').click(function(){
        $('.popup2').fadeOut(0)
    });
    $('.popup3').hide();
    $('.product_wrap_o').click(function(){
        $('.popup3').fadeIn(0)
    });
    $('#popup_close3').click(function(){
        $('.popup3').fadeOut(0)
    });
});