// full screen nav

function openNav() {
    document.getElementById("nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}
//nav fixed
$('document').ready(function () {
    $('.product .left-content .box li span').click(function () {
        $(this).toggleClass('r-active');
        $(this).toggleClass('ra-active');
    })
});
$("document").ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.heading').addClass('fixed-top');
        } else {
            $('.heading').removeClass('fixed-top');
        }
    });
});

/* video popup */
$(function () {
    $("#video5").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
    $("#video1").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
    $("#video2").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
    $("#video3").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
    $("#video4").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
});


$(function () {
    $("#tabs").tabs();
});

// nav fixed 
/*$("document").ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.main-nav').addClass('fixed-top');
        } else {
            $('.main-nav').removeClass('fixed-top');
        }
    });
});


/* nav scrolling */
$(document).ready(function () {
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        var id = $(e.currentTarget).attr('href');
        var $dest = $(id);

        $('html,body').animate({
            scrollTop: ($dest.offset().top)
        }, 1000);
    });

});



// banner carusel
$('document').ready(function () {
    $('.banner .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 0,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });
});



// brand carusel
$('document').ready(function () {
    $('.brand .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        //navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        margin: 0,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });
});


$(document).ready(function () {
    var $owl = $('#main-carousel');

    $owl.children().each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        center: true,
        loop: true,
        margin: -30,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        dots: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });
});



// voices carousel


$('document').ready(function () {
    $('.voice .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 0,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });
});




// voices carousel


$('document').ready(function () {
    $('.character .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 20,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 2
            },
            1000: {
                items: 3
            },
        }
    });
});



/* nav scrolling */
$(document).ready(function () {

    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        var id = $(e.currentTarget).attr('href');
        var $dest = $(id);
        $('html,body').animate({
            scrollTop: ($dest.offset().top)
        }, 1000);
    });

});
