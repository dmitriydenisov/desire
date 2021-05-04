$(function(){
    $('.header__btn').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--active');
    })
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--active');
    })
})