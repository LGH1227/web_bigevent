$(function () {

    $(".checkall").change(function () {

        // $(this).prop("checked");
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));

        if ($(this).prop('checked')) {

            $('.cart-item').addClass('check-cart-item');
        } else {

            $('.cart-item').removeClass('check-cart-item');
        }

    });
    // checkall 全选框 j-checkbox 复选框
    $(".j-checkbox").change(function () {
        //   $(".j-checkbox").length) 是小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {

            $(".checkall").prop("checked", true);
        } else {

            $(".checkall").prop("checked", false);

        }

        if ($(this).prop('checked')) {

            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {

            $(this).parents('.cart-item').removeClass('check-cart-item');
        }


    })

    $('.increment').click(function () {

        var n = $(this).siblings('.itxt').val();
        n++;
        console.log(n);

        $(this).siblings('.itxt').val(n);

        // var p = $(this).parent().parent().siblings('.p-price').text();
        var p = $(this).parents('.p-num').siblings('.p-price').text();
        p = p.substr(1);
        console.log(p);
        var price = (p * n).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + price);

        getSum()
    })
    $('.decrement').click(function () {

        var n = $(this).siblings('.itxt').val();
        n--;

        console.log(n);
        if (n <= 1) {
            n = 1;
        }

        $(this).siblings('.itxt').val(n);

        var p = $(this).parents('.p-num').siblings('.p-price').text();
        p = p.substr(1);
        console.log(p);

        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (p * n).toFixed(2));

        getSum()
    })

    $('.itxt').change(function () {

        var n = $(this).val(); // 当前文本框的值
        var p = $(this).parents('.p-num').siblings('.p-price').text(); // 当前商品对应的单价
        p = p.substr(1); // 去掉第一个数字(即 ￥ 符号)
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (p * n).toFixed(2));

        getSum()
    });

    getSum();
    function getSum() {

        var count = 0;
        var money = 0;
        $('.itxt').each(function (i, ele) {

            count += parseInt($(ele).val());
        });
        $('.amount-sum em').text(count);
        $('.p-sum').each(function (i, ele) {

            money += parseFloat($(ele).text().substr(1));
        });
        $('.price-sum em').text('$' + money.toFixed(2));

    }

    $('.p-action a').click(function () {

        $(this).parents('.cart-item').remove();
        getSum();

    });

    $('.remove-batch').click(function () {


        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();

    });

    $('.clear-all').click(function () {

        $('.cart-item').remove();
        getSum();
    })

})