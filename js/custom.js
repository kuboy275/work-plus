$(document).ready(function() {
    // START POPUP MENU

    $("#btnOpenMenu").on("click", openMenu);
    $("#btnCloseMenu,#overlayCloseMenu").on("click", closeMenu);

    function openMenu() {
        $('body').css('overflow', 'hidden');
        $('.overlay-menu').fadeIn(300);
        $('.menu-mobile').addClass('show');
    }

    function closeMenu() {
        $('body').css('overflow', '');
        $('.overlay-menu').fadeOut(300);
        $('.menu-mobile').removeClass('show');
    }


    if (document.querySelectorAll('.support-mobile .item')) {
        $(".support-mobile .item").click(function() {
            if ($(this).hasClass("active")) {
                $(".support-mobile .item").removeClass("active");
            } else {
                $(".support-mobile .item").removeClass("active");
                $(this).fadeIn();
                $(this).addClass("active");
            }
        });
    }
    // END POPUP MENU
});