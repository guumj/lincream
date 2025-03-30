// bannerslide
setInterval(function () {
    $('#banner .banner_slide').delay(2000);
    $('#banner .banner_slide').animate({
        marginLeft: '-1920px'
    }, 600)
    $('#banner .banner_slide').delay(2000);
    $('#banner .banner_slide').animate({
        marginLeft: '-3840px'
    }, 600)
    $('#banner .banner_slide').delay(2000);
    $('#banner .banner_slide').animate({
        marginLeft: '-5760px'
    }, 600)
    $('#banner .banner_slide').animate({
        marginLeft: '0'
    }, 0)
})

// withslide
$('.section ul li').mouseenter(function () {
    $(this).addClass('on').siblings().removeClass('on');
});
$('.section ul li').mouseleave(function () {
    $(this).removeClass('on');
});
$('.con').mouseenter(function () {
    $(this).removeClass('on');
});

// areabtn
$(".option").hide();
$(".select_btn").click(function () {
    $(".option").toggle()
    $(".area_btn").toggleClass("turn")
});

function option1() {
    document.getElementById("select").innerHTML = 'naver'
    $(".option").hide();
    $(".area_btn").toggleClass("turn")
}
function option2() {
    document.getElementById("select").innerHTML = 'daum'
    $(".option").hide();
    $(".area_btn").toggleClass("turn")
}

// infocheckbar
$('.infocheck_box').click(function () {
    $(".infocheck_bar2").fadeToggle();
})

// main_tab
$(function () {
    $('.tab').click(function () {
        $(this).parent().addClass('on').siblings().removeClass('on')
    });
});