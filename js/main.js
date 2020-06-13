$(document).ready(function(){

    $nav=$('.nav');
    $togglecollapse=$('.toggle-collapse');

    /*click event on toggle menu */
    $toggle-collapse.click(function(){
        $nav.toggleclass('collapse');
    })

    //owl-carousel for blog
    $('.Owl-Carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev '),$('.owl-navigation .owl-nav-prev ')]
    });

});