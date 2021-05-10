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
    })


    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
})