$(".freetrial-slider").owlCarousel({
    loop: true,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700,
    responsive: {
        0: { items: 2, margin: 5 },
        768: { items: 3, margin: 20 },
        992: { items: 5, margin: 20 },
    },
});
$(".product-slider").owlCarousel({
    loop: false,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    autoplay: false,
    smartSpeed: 700,
    responsive: {
        0: { items: 6, margin: 0, nav: false },
        768: { items: 3, margin: 20, nav: true },
        992: { items: 5, margin: 20, nav: true },
    },
});
