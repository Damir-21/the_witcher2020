var mySwiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    loop:true,//для бесконечного перелист
    navigation: {//доб кнопке next класс arrow
        nextEl: '.arrow',
    },
    breakpoints : {
    580 : {
      slidesPerView:2
    }
    }
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');

menuButton.addEventListener('click',function(){
  menuButton.classList.toggle('menu-btn-active');
  menu.classList.toggle('header-active');
})