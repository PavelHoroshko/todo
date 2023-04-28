const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  let nav = document.querySelector(".navigation");
  let burger = document.querySelector(".fa-bars");
  burger.addEventListener("click", function (){
  nav.classList.toggle("active");
})