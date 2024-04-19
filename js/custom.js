// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {

    let nonFilterClasses = [
        ".bebidas-menu",
        ".granite-menu",
        ".jugos-menu"
    ]

    let gridMenu = $('.grid-menu');
    let columnMenu = $('.column-menu');

    $(document).ready(function() {
        columnMenu.css('display', 'none');
        // Iterar sobre el array
        for (let i = 0; i < nonFilterClasses.length; i++) {
          let className = nonFilterClasses[i];
          // Seleccionar los componentes con la clase y aplicar el estilo
          $(className).css("display", "none");
        }
      });

    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');

        if (!nonFilterClasses.includes(data)) {
            columnMenu.css('display', 'none');
        }

        if (nonFilterClasses.includes(data)) {
            columnMenu.css('display', 'block');
            $(data).css('display', 'block');
        }

        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(10.425274, -75.550018),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});