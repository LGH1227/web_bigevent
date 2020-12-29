$(function () {

    var flag = true;
    var boxTop = $('.jy').offset().top;
    toggleTool();

    function toggleTool() {

        if ($(document).scrollTop() >= boxTop) {

            $('.gd').fadeIn();
        } else {
            $('.gd').fadeOut();

        }

    }
    $(window).scroll(function () {

        toggleTool();
        if (flag) {
            $('.luo .jy').each(function (i, ele) {

                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.gd li').children('a').eq(i).addClass('h').parent().siblings('li').children('a').removeClass();
                    console.log(i);
                }
            })

        }

        // console.log($(document).scrollTop());
        // if ($(document).scrollTop() >= boxTop) {

        //     $('.gd').fadeIn();
        // } else {
        //     $('.gd').fadeOut();

        // }
    });

    $('.gd li').click(function () {
        // alert('hello')
        flag = false;
        console.log($(this).index());
        var current = $('.luo .jy').eq($(this).index()).offset().top

        $('body,html').stop().animate({
            scrollTop: current

        }, function () {

            flag = true;
        })

        $(this).children('a').addClass('h').parent().siblings('li').children('a').removeClass('h');
        // $(this).siblings('li').children('a').removeClass('h');
    })

});