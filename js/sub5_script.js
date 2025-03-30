$(function () {

    $(".answer").hide();
    $(".question").click(function () {
        $(this).next().slideToggle();
    });

    $(".right> li> .font1").click(function () {
        $(this).next().slideToggle();
        $('.d p').toggleClass('ab');
    });


    $(".question").click(function () {
        $(this).children().children("img").toggleClass("turn");
    });
});



