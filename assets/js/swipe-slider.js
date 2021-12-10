var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false
    },
    
  });