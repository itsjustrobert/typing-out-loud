$(document).ready(function(){


    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /**click event on toggle menu */ 
    $toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
    })

//oil carousel for blog
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout:4000,
    dots: false,
    nav:true,
    navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")]
   
});
// click to scroll down
$('.move-up span').click(function(){
$('html, body').animate({
    scrollTop:0
}, 1000)

})
// AOS instance
AOS.init();
});




