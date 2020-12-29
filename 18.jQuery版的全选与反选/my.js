$(function () {

    $(".checkall").change(function () {


        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));

        if ($(this).prop('checked')) {

            $('.cart-item').addClass('check-cart-item');
        } else {

            $('.cart-item').removeClass('check-cart-item');
        }

    });
    $(".no").click(function () {


        $(".j-checkbox,.no").prop("checked", $(this).prop("checked"));

        if ($(this).prop('checked')) {
            $('.checkall').removeClass('check-cart-item');

            $('.cart-item').removeClass('check-cart-item');
            // $('.checkall').removeClass('check-cart-item');

        }

        $(".checkall").prop("checked", $(this).prop("checked"));

        if ($(this).prop('checked')) {

            $('.cart-item').removeClass('check-cart-item');
            $('.checkall').removeClass('check-cart-item');

        }


    });

    $(".j-checkbox").change(function () {

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

})