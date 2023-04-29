window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const info = document.querySelectorAll('.block__info');
    const hamburger = document.querySelector('.hamburger');
    let shadow = document.getElementById('bsn');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('active');
        shadow.classList.toggle ('bsn');
        menu.classList.toggle('hidden');
    });

    info.forEach(el => {
        el.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('active');
            menu.classList.toggle('hidden');
            shadow.classList.toggle ('bsn');
        })
    }) 
})

$(document).ready(function () {
    $('.carousel').slick({ 
        speed: 1000,
        // adaptiveHeight: true, //отключает опцию контроля высоты картинок 
        infinite: true,
        dots:true,
        slidesToShow: 2.99,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1.99,
                dots: false 
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  dots: false 
                }
              }
          ]
      }); 
})
