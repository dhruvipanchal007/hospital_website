const navItems = document.querySelector("#nav-item");
const openBtn = document.querySelector("#open_btn");
const closeBtn = document.querySelector("#close_btn");

openBtn.addEventListener('click', () => {
    navItems.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

const closeNav = () => {
    navItems.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
}

closeBtn.addEventListener('click', (closeNav));





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
