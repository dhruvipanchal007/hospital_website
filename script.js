// const navItems = document.querySelector("#nav-item");
// const openBtn = document.querySelector("#open_btn");
// const closeBtn = document.querySelector("#close_btn");

// openBtn.addEventListener('click', () => {
//     navItems.style.display = "block";
//     openBtn.style.display = "none";
//     closeBtn.style.display = "block";
// });

// closeBtn.addEventListener('click', () => {
//     navItems.style.display = "none";
//     openBtn.style.display = "block";
//     closeBtn.style.display = "none";
// });

// function setupToggleMenu() {
//     const openBtn = document.querySelector("#open_btn");
//     const closeBtn = document.querySelector("#close_btn");
//     const navItems = document.querySelector("#nav-item");

//     openBtn.addEventListener('click', () => {
//         if (window.matchMedia("(max-width: 1024px)").matches) {
//             navItems.style.display = 'block';
//             openBtn.style.display = 'none';
//             closeBtn.style.display = 'inline-block';
//         }
//     });

//     closeBtn.addEventListener('click', () => {
//         if (window.matchMedia("(max-width: 1024px)").matches) {
//             navItems.style.display = 'none';
//             openBtn.style.display = 'inline-block';
//             closeBtn.style.display = 'none';
//         }
//     });

//     window.addEventListener('resize', () => {
//         if (!window.matchMedia("(max-width: 1024px)").matches) {
//             navItems.style.display = 'block';
//             openBtn.style.display = 'none';
//             closeBtn.style.display = 'none';
//         } else {
//             navItems.style.display = 'none';
//             openBtn.style.display = 'inline-block';
//             closeBtn.style.display = 'none';
//         }
//     });
// }

// setupToggleMenu();


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
