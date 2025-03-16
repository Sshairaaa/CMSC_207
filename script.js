document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navbar = document.querySelector(".navbar");

    burgerMenu.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
