$(function() {

    // ---------- anchor click animate ----------

    $(window).scroll(function() {


        var st = $(window).scrollTop();
        if (st > 0) {
            $(".header").css({
                "background": "#131144",
                "padding": "5px 10px"
            })
            $(".header .flex-container").css({
                "max-width": "1400px"
            })
        } else {
            $(".header").css({
                "background": "transparent",
                "padding": "20px"
            })
            $(".header .flex-container").css({
                "max-width": "1200px"
            })
        }

    })


    // ---------- Anchor Active Animate ----------
    $(window).scroll(function() {

        var so = $(window).scrollTop();
        var si = $(".section").attr("id");
        var sot = $(si).offset().top;

        if (so == sot) {
            var active = $(".header ul li a").attr("href")
        }


    })

    // ---------- Hader ----------
    $(".header .nav ul li a").click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        var ot = $(href).offset().top + 1;
        $("html, body").animate({
            scrollTop: ot
        }, 1000)
    })
    $("#menu-btn").click(function() {
            $(".nav").css({
                "top": "65.5px"
            })
        })
        // ---------- Coundown ----------
    var countDate = new Date(2022, 0, 30, 00, 00, 00);

    function timeCount() {
        var now = new Date();
        var gap = countDate - now;
        // alert(gap);

        var second = 1000;
        var minutes = second * 60; // 60000
        var hours = minutes * 60; // 3600000
        var day = hours * 24; //86400000
        var d = Math.floor(gap / day); //alert(gap / 86400000);

        var h = Math.floor((gap % day) / hours); //alert((gap % 86400000) / 3600000);

        var m = Math.floor((gap % hours) / minutes); //alert((gap % 3600000)/ 60000);

        var s = Math.floor((gap % minutes) / second); //alert((gap % 60000)/ 1000 );

        $("#day h2").html(d);
        $("#hours h2").html(h);
        $("#minutes h2").html(m);
        $("#second h2").html(s);

    }
    setInterval(function() { timeCount(); }, 1000);
    // alert(countDate);
    // -------------- Tab section --------------
    $("#tabs").tabs();

    $(".schedule .schedule-day ul li").eq(0).css({
        "background": "rgb(242, 5, 116,.4)"
    })
    $(".schedule .schedule-day ul li").click(function() {
        $(".schedule .schedule-day ul li").css({
            "background": "transparent"
        })
        $(this).css({
            "background": "rgb(242, 5, 116,.4)"
        })
    })

    // -------------- slick slider --------------


    $("button.slick-arrow").fadeOut();
    $('#autoplay').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrow: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    //-------------------- search --------------------
    $("#msearch").click(function() {
        $(".mmain").css({
            "height": "100vh"
        })
        $(".msearch").css({
            "transform": "translateY(0px)",
            "opacity": "1"
        })
    })
    $(".fa-times").click(function() {
        $(".mmain").css({
            "height": "0"
        })
        $(".msearch").css({
            "transform": "translateY(0px)",
            "opacity": "1"
        })
    })


    // ------------------- follow cursor -------------------

    // $(document).mousemove(function(e) {
    //         $(".cursor").css({ left: e.pageX, top: e.pageY });
    //         $(".cursor2").css({ left: e.pageX, top: e.pageY });
    //     })
    /* $("p").mouseover(function() {
        $(this).css({
            "position": "relative",
            "z-index": "1"
        })
        $(".cursor").css({
            "z-index": "-1"
        })
        $(".curso2").css({
            "z-index": "-1"
        })
    }) */



































});