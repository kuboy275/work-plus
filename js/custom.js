// START POPUP MENU

const btnOpenMenu = document.querySelector("#btnOpenMenu");
const btnCloseMenu = document.querySelector("#btnCloseMenu");
const overlayCloseMenu = document.querySelector("#overlayCloseMenu");
const menuMobile = document.querySelector(".menu-mobile");

btnOpenMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
overlayCloseMenu.addEventListener("click", closeMenu);

function openMenu() {
    menuMobile.classList.add("show");
    overlayCloseMenu.style.display = "block";
}

function closeMenu() {
    menuMobile.classList.remove("show");
    overlayCloseMenu.style.display = "none";
}

const showSub = document.querySelectorAll(".show-sub");
showSub.forEach((e, i) => {
    const btnCollapse = e.querySelector('.btnCollapse');
    const subCollapse = e.querySelector('.collapse');
    btnCollapse.addEventListener("click", () => {
        btnCollapse.classList.toggle('rorate-icon-active');
        subCollapse.classList.toggle('show');
    })
})

// END POPUP MENU