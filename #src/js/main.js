$(function(){
    $('.header__btn').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--active');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--active');
    });

    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open');
    });
    
    if($(window).width() < 651){
        $('.works-path__item--measurements').appendTo('.works-path__items-box')
    }

    $('.top__slider').slick({
        dots:true,
        arrows: false,
        fade: true,
        loop: true,
        autoplay: true,
    });
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots:true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1701,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
              }
            },
            {
                breakpoint: 1511,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 7,
                }
              },
              {
                breakpoint: 1201,
                settings:{
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },
              {
                breakpoint: 841,
                settings:{
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 551,
                settings:{
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 376,
                settings:{
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
        // loop: true,
    });
    
    $('.article-slider__box').slick({
        fade: true,
        loop: true,
        prevArrow: '<button class="article-slider__arrow article-slider__arrowLeft"  type="button" ><img src="img/icons/back.svg" alt=""></img></button>',
        nextArrow: '<button class="article-slider__arrow article-slider__arrowRight"  type="button" style=""><img src="img/icons/next.svg" alt=""></img></button>',
    });

    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
})