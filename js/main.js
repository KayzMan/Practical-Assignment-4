let mobileBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle("hide");
});