$(function(){
    $('.header__btn').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--active');
    })
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--active');
    })

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
        // loop: true,
    });
    
    $('.article-slider__box').slick({
        fade: true,
        // dots:false,
        // arrows: true,
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