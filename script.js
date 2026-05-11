const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// efel scroll
// $(document).ready(function () {
//     var scroll_pos = 0;
//     $(document).scroll(function(){
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 0){
//             $("nav").addClass("putih");
//         } else {
//             $("nav").removeClass("putih");
//         }
//     })
// });

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});