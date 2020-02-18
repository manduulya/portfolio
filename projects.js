$('.hamburger-wrapper').click(function(){
    $('.icon').toggleClass('close');
    });
$('.hamburger-wrapper').mouseenter(function(){
    $(this).animate({borderRadius: '30px'}, 0300)
})
$('.hamburger-wrapper').mouseleave(function(){
    $(this).animate({borderRadius: '15px'}, 0300)
})

$(document).ready(function(){
    $('.hamburger-wrapper').click(function(){
        $('.overlay').toggleClass('active')
        $('.menu').toggleClass('active')
    })
});
