const menuBtn = document.querySelector(".responsivebtn");
const menu = document.querySelector(".responsivemenu")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});