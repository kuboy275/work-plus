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

    // const showSub = document.querySelectorAll(".show-sub");
    // showSub.forEach((e, i) => {
    //     const btnCollapse = e.querySelector('.btnCollapse');
    //     const subCollapse = e.querySelector('.collapse');
    //     btnCollapse.addEventListener("click", () => {
    //         btnCollapse.classList.toggle('rorate-icon-active');
    //         subCollapse.classList.toggle('show');
    //     })
    // })

    // END POPUP MENU
});