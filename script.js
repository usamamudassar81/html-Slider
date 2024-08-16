const swiper = new Swiper('.Slider-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    // breakpoints ka matlib ha apni app ko Response banana ya Response bananay kay lia use kia jatay hain yani 0 sy 640 tak hamari screen per slidesPerView mein jitni counting mention ha utni slides show hon gi and 640 sy 1024 tak aglay mein jitni define hain wo show hon gi phir ham nay 1024 ko use kia ha es ka matlib ha kay 1024 px ki screen aur es sy uper walay saray size
    breakpoints:{
      0:{
        slidesPerView:1
      },
      620:{
        slidesPerView:2
      },
      1024:{
        slidesPerView:3
      },
    }
    
  });