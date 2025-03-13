var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  on: {
      slideChange: function () {
          // Pobieramy wszystkie elementy video
          let videos = document.querySelectorAll(".swiper-slide video");
          videos.forEach(video => {
              video.pause(); // Pauza dla każdego filmu
              video.currentTime = 0; // Resetowanie do początku
          });
      }
  }
});
