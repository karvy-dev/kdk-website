!function(e) {
    "use strict";
    $("#news-slider2").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile:[600,1],
        dots: false,
        navigationText:false,
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 1000,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 2000,
        navText:['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    });
    if(e(".main-menu .navigation li").hover(function() {
        e(this).children(".submenu").stop(!0, !1, !0).slideToggle(300)
    }
    ), e(".main-menu .mobile-menu li.dropdown ul").length&&(e(".main-menu .mobile-menu li.dropdown").append('<div class="dropdown-btn"></div>'), e(".main-menu .mobile-menu li.dropdown .dropdown-btn").on("click", function() {
        e(this).prev("ul").slideToggle(500)
    }
    )), e(".hero-slider").length&&e(".hero-slider").slick( {
        autoplay: !0, autoplaySpeed: 3e3, arrows: !0, prevArrow: '<button type="button" class="slick-prev">Previous</button>', nextArrow: '<button type="button" class="slick-next">Next</button>', dots: !0, fade: !0, cssEase: "linear"
    }
    ), e(".accordion-box").length&&e(".accordion-box .acc-btn").on("click", function() {
        !0!==e(this).hasClass("active")&&e(".accordion-box .acc-btn").removeClass("active"), e(this).next(".acc-content").is(":visible")?(e(this).removeClass("active"), e(this).next(".acc-content").slideUp(500)): (e(this).addClass("active"), e(".accordion-box .acc-content").slideUp(500), e(this).next(".acc-content").slideDown(500))
    }
    ), e(".scroll-to-target").length&&e(".scroll-to-target").on("click", function() {
        var a=e(this).attr("data-target");
        e("html, body").animate( {
            scrollTop: e(a).offset().top
        }
        , 1e3)
    }
    ), e(".gallery-slider").length&&e(".gallery-slider").owlCarousel( {
        loop:!0, margin:0, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 400: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 800: {
                items: 3
            }
            , 1200: {
                items: 4
            }
        }
    }
    ), e(".brand-slider").length&&e(".brand-slider").owlCarousel( {
        loop:!0, margin:30, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 400: {
                items: 2
            }
            , 600: {
                items: 3
            }
            , 800: {
                items: 4
            }
            , 1200: {
                items: 5
            }
        }
    }
    ), e(".project-slid").length&&e(".project-slid").owlCarousel( {
        loop:!0, margin:0, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 400: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 800: {
                items: 1
            }
            , 1200: {
                items: 1
            }
        }
    }
    ), e(".four-column-carousel").length&&e(".four-column-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, smartSpeed:2e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 800: {
                items: 3
            }
            , 1070: {
                items: 4
            }
        }
    }
    ), e(".two-column-carousel").length&&e(".two-column-carousel").owlCarousel( {
        loop:!0, margin:40, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-right"></span>', '<span class="fa fa-angle-left"></span>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 800: {
                items: 2
            }
            , 1024: {
                items: 2
            }
        }
    }
    ), e(".three-column-carousel").length&&e(".three-column-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 800: {
                items: 2
            }
            , 1024: {
                items: 3
            }
        }
    }
    ), e(".testimonials-slider").length&&e(".testimonials-slider").owlCarousel( {
        loop:!0, margin:30, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 800: {
                items: 1
            }
            , 1024: {
                items: 1
            }
        }
    }
    ), e(".brand-slider").length&&e(".brand-slider").owlCarousel( {
        loop:!0, margin:30, nav:!0, smartSpeed:3e3, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 600: {
                items: 3
            }
            , 800: {
                items: 4
            }
            , 1024: {
                items: 5
            }
        }
    }
    ), e(".single-item-carousel").length&&e(".single-item-carousel").owlCarousel( {
        loop:!0, margin:0, nav:!0, smartSpeed:700, autoplay:4e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1200: {
                items: 1
            }
        }
    }
    ), e(".main-slider-carousel").length&&e(".main-slider-carousel").owlCarousel( {
        loop:!0, margin:0, nav:!0, animateOut:"slideOutDown", animateIn:"fadeIn", active:!0, smartSpeed:1e3, autoplay:5e3, navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1200: {
                items: 1
            }
        }
    }
    ), e(".tabs-box").length&&e(".tabs-box .tab-buttons .tab-btn").on("click", function(a) {
        a.preventDefault();
        var t=e(e(this).attr("data-tab"));
        t.parents(".tabs-box").find(".tab-buttons").children(".tab-btn").removeClass("active-btn"), e(this).addClass("active-btn"), t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), t.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), e(t).fadeIn(300), e(t).addClass("active-tab")
    }
    ), e(".tabbed-floor-plans .floor-btn").length&&e(".tabbed-floor-plans .floor-btn").on("click", function(a) {
        a.preventDefault();
        var t=e(e(this).attr("href"));
        e(".tabbed-floor-plans .floor-btn").removeClass("active"), e(this).addClass("active"), e(".tabbed-floor-plans .floor-details").removeClass("collapsed"), e(".tabbed-floor-plans .floor-details ").fadeOut(0), e(t).fadeIn(300)
    }
    ), e(".progress-levels .progress-box .bar-fill").length&&e(".progress-box .bar-fill").each(function() {
        var a=e(this).attr("data-percent");
        e(this).css("width", a+"%"), e(this).parents(".progress-box").children(".percent").html(a+"%")
    }
    ), e(".search-toggle").length&&e(".search-toggle").on("click", function() {
        e(this).toggleClass("active"), e(this).next(".search-box").toggleClass("now-visible")
    }
    ), e(".lightbox-image").length&&e(".lightbox-image").fancybox( {
        openEffect:"elastic", closeEffect:"elastic", helpers: {
            media: {}
        }
    }
    ), e("#contact-form").length&&e("#contact-form").validate( {
        submitHandler:function(a) {
            var t=e(a).find('button[type="submit"]'), s="#form-result";
            e(s).remove(), t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var n=t.html();
            t.html(t.prop("disabled", !0).data("loading-text")), e(a).ajaxSubmit( {
                dataType:"json", success:function(l) {
                    "true"==l.status&&e(a).find(".form-control").val(""), t.prop("disabled", !1).html(n), e(s).html(l.message).fadeIn("slow"), setTimeout(function() {
                        e(s).fadeOut("slow")
                    }
                    , 6e3)
                }
            }
            )
        }
    }
    ), e(".our-team .bxslider").length&&e(".our-team .bxslider").bxSlider( {
        nextSelector: ".our-team #slider-next", prevSelector: ".our-team #slider-prev", nextText: '<i class="fa fa-angle-right"></i>', prevText: '<i class="fa fa-angle-left"></i>', mode: "fade", auto: "true", speed: "700", pagerCustom: ".our-team .slider-pager .thumb-box"
    }
    ), e(".has-gallery-popup").length&&(e(".has-gallery-popup").on("click", function(a) {
        a.preventDefault();
        var t=e(e(this).attr("href"));
        e("body").addClass("popup-visible"), e(t).addClass("now-visible")
    }
    ), e(".gallery-box .btn-close,.gallery-box .bg-fade-layer").on("click", function() {
        e(".gallery-box").removeClass("now-visible"), e("body").removeClass("popup-visible")
    }
    )), e(".vertical-slider").length) {
        var a=new MasterSlider;
        a.setup("masterslider", {
            width: 850, height: 470, space: 10, view: "basic", dir: "v"
        }
        ),
        a.control("arrows"),
        a.control("scrollbar", {
            dir: "v"
        }
        ),
        a.control("circletimer", {
            color: "#FFFFFF", stroke: 9
        }
        ),
        a.control("thumblist", {
            autohide: !1, dir: "v"
        }
        )
    }
    (e(".countdown").length&&e(".countdown").countdown("2018/1/1", function(a) {
        e(this).html(a.strftime('<div class="counter-column"><span class="count">%D</span><br>Days</div> <div class="counter-column"><span class="count">%H</span><span class="colon"></span><br>Hours</div>  <div class="counter-column"><span class="count">%M</span><span class="colon"></span><br>Mutines</div>  <div class="counter-column"><span class="count">%S</span><span class="colon"></span><br>Seconds</div>'))
    }
    ), e(".scroll-to-target").length&&e(".scroll-to-target").on("click", function() {
        var a=e(this).attr("data-target");
        e("html, body").animate( {
            scrollTop: e(a).offset().top
        }
        , 10)
    }
    ), e(".wow").length)&&new WOW( {
        boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0
    }
    ).init();
    e(".partners-slider").length&&e(".partners-slider").owlCarousel( {
        autoplay:6e3, smartSpeed:1e3, margin:30, loop:!0, autoplayHoverPause:!0, dots:!1, responsive: {
            0: {
                items: 1
            }
            , 550: {
                items: 1
            }
            , 992: {
                items: 1
            }
            , 1200: {
                items: 1
            }
        }
    }
    ),
    e(".services-carousel").length&&e(".services-carousel").owlCarousel( {
        autoplay:!0,autoplaySpeed:100, autoplayTimeout:1e3,smartSpeed:100, margin:30, loop:!0, margin:30, nav:!0, navText:["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], autoplayHoverPause:!0, dots:!1, responsive: {
            0: {
                items: 1
            }
            , 768: {
                items: 2
            }
            , 992: {
                items: 2
            }
            , 1200: {
                items: 3
            }
        }
    }
    ),
    e(".awards-carousel").length&&e(".awards-carousel").owlCarousel( {
        autoplay:!0, autoplaySpeed:100, autoplayTimeout:1e3, smartSpeed:100, margin:30, loop:!0, autoplayHoverPause:!0, dots:!1, responsive: {
            0: {
                items: 1
            }
            , 768: {
                items: 2
            }
            , 992: {
                items: 2
            }
            , 1200: {
                items: 3
            }
        }
    }
    ),
    jQuery(document).on("ready", function() {
        jQuery, e(".switch_menu").length&&(e(".switch_btn button").on("click", function() {
            e(".switch_menu").toggle(300)
        }
        ), e("#myonoffswitch").on("click", function() {
            e(".header-lower").toggleClass("menu_fixed"), e(".header-lower").toggleClass("fixed")
        }
        ), e("#boxed").on("click", function() {
            e(".layout_changer").addClass("home_boxed")
        }
        ), e("#full_width").on("click", function() {
            e(".layout_changer").removeClass("home_boxed")
        }
        ), e(".bg1").on("click", function() {
            e(".home_boxed").addClass("bg1"), e(".home_boxed").removeClass("bg2 bg3 bg4")
        }
        ), e(".bg2").on("click", function() {
            e(".home_boxed").addClass("bg2"), e(".home_boxed").removeClass("bg1 bg3 bg4")
        }
        ), e(".bg3").on("click", function() {
            e(".home_boxed").addClass("bg3"), e(".home_boxed").removeClass("bg2 bg1 bg4")
        }
        ), e(".bg4").on("click", function() {
            e(".home_boxed").addClass("bg4"), e(".home_boxed").removeClass("bg2 bg3 bg1")
        }
        ), e("#styleOptions").styleSwitcher( {
            hasPreview:!0, fullPath:"css/custom/", cookie: {
                expires: 30, isManagingLoad: !0
            }
        }
        )), e(".select-menu").length&&e(".select-menu").selectmenu(), function() {
            if(e("#doughnut-chartBox").length) {
                var a=e("#doughnut-chartBox");
                new Chart(a, {
                    type:"doughnut", data: {
                        labels:["58%", "22%", "20%"], datasets:[ {
                            data: [300, 50, 100], backgroundColor: ["#121d2f", "#36a1e9", "#9185c2"], hoverBackgroundColor: ["#121d2f", "#36a1e9", "#9185c2"], hoverBorderColor: ["#fff", "#fff", "#fff"]
                        }
                        ]
                    }
                    , option: {
                        position: "left", responsive: !0
                    }
                }
                )
            }
        }
        (), e(".masonary-layout").length&&e(".masonary-layout").isotope( {
            layoutMode: "masonry"
        }
        ), e(".post-filter").length&&e(".post-filter li").children("span").on("click", function() {
            var a=e(this), t=a.parent().attr("data-filter");
            return e(".post-filter li").children("span").parent().removeClass("active"), a.parent().addClass("active"), e(".filter-layout").isotope( {
                filter:t, animationOptions: {
                    duration: 500, easing: "linear", queue: !1
                }
            }
            ), !1
        }
        ), e(".post-filter.has-dynamic-filter-counter").length&&e(".post-filter.has-dynamic-filter-counter").find("li").each(function() {
            var a=e(this).data("filter");
            console.log(a);
            var t=e(".gallery-content").find(a).length;
            e(this).children("span").append('<span class="count"><b>'+t+"</b></span>")
        }
        ), function() {
            if(e(".range-slider-price").length) {
                var a=document.getElementById("range-slider-price");
                noUiSlider.create(a, {
                    start:[15, 45], limit:99, behaviour:"drag", connect:!0, range: {
                        min: 15, max: 99
                    }
                }
                );
                var t=document.getElementById("min-value-rangeslider"), s=document.getElementById("max-value-rangeslider");
                a.noUiSlider.on("update", function(e, a) {
                    (a?s: t).value=e[a]
                }
                )
            }
        }
        (), e(".quantity-spinner").length&&e("input.quantity-spinner").TouchSpin( {
            verticalbuttons: !0
        }
        )
    }
    ),
    e(window).on("scroll", function() {
        !function() {
            e(".stricky").length&&(e(window).scrollTop()>100?(e(".stricky").removeClass("fadeIn animated"), e(".stricky").addClass("stricky-fixed fadeInDown animated"), e(".scroll-to-top").fadeIn(500)): e(this).scrollTop()<=100&&(e(".stricky").removeClass("stricky-fixed fadeInDown animated"), e(".stricky").addClass("slideIn animated"), e(".scroll-to-top").fadeOut(500)))
        }
        (), e(".fact-counter").length&&e(".fact-counter .column.animated").each(function() {
            var a=e(this), t=a.find(".count-text").attr("data-stop"), s=parseInt(a.find(".count-text").attr("data-speed"), 10);
            a.hasClass("counted")||(a.addClass("counted"), e( {
                countNum: a.find(".count-text").text()
            }
            ).animate( {
                countNum: t
            }
            , {
                duration:s, easing:"linear", step:function() {
                    a.find(".count-text").text(Math.floor(this.countNum))
                }
                , complete:function() {
                    a.find(".count-text").text(this.countNum)
                }
            }
            ))
        }
        ), e("#area-chart").length&&new CanvasJS.Chart("area-chart", {
            data:[ {
                type:"splineArea", color:"#e5e5e5", fillOpacity:1, markerBorderColor:"#fff", markerColor:"#9185c2", markerSize:10, dataPoints:[ {
                    x: 0, y: 17
                }
                , {
                    x: 1, y: 10
                }
                , {
                    x: 2, y: 13
                }
                , {
                    x: 3, y: 18
                }
                , {
                    x: 4, y: 11
                }
                , {
                    x: 5, y: 15
                }
                , {
                    x: 6, y: 19
                }
                , {
                    x: 7, y: 14
                }
                ]
            }
            , {
                type:"splineArea", color:"rgb(110, 140, 215)", fillOpacity:1, markerBorderColor:"#222", markerColor:"#222", markerSize:10, dataPoints:[ {
                    x: 0, y: 4
                }
                , {
                    x: 1, y: 6
                }
                , {
                    x: 2, y: 4
                }
                , {
                    x: 3, y: 10
                }
                , {
                    x: 4, y: 11
                }
                , {
                    x: 5, y: 8
                }
                , {
                    x: 6, y: 9
                }
                , {
                    x: 7, y: 12
                }
                ]
            }
            ]
        }
        ).render()
    }
    ),
    e(window).on("load", function() {
        e(".preloader").length&&e(".preloader").delay(200).fadeOut(500), e("#polyglot-language-options").length&&e("#polyglotLanguageSwitcher").polyglotLanguageSwitcher( {
            effect:"slide", animSpeed:150, testMode:!0, onChange:function(e) {
                alert("The selected language is: "+e.selectedItem)
            }
        }
        ), e("#chartbar").length&&new CanvasJS.Chart("chartbar", {
            data:[ {
                type:"column", showInLegend:!1, color:"#000000", dataPoints:[ {
                    label: "2014", y: 100
                }
                , {
                    label: "2015", y: 75
                }
                , {
                    label: "2016", y: 50
                }
                , {
                    label: "2017", y: 95
                }
                ]
            }
            , {
                type:"column", showInLegend:!1, color:"#e5e5e5", dataPoints:[ {
                    label: "2014", y: 90
                }
                , {
                    label: "2015", y: 65
                }
                , {
                    label: "2016", y: 40
                }
                , {
                    label: "2017", y: 75
                }
                ]
            }
            ], axisY: {
                tickLength: 0, gridColor: "#fbfcfc", interval: 25, lineColor: "transparent"
            }
            , axisX: {
                tickLength: 10, gridColor: "transparent", lineColor: "transparent", tickColor: "transparent"
            }
        }
        ).render(), e("#chartbarTwo").length&&new CanvasJS.Chart("chartbarTwo", {
            data:[ {
                type:"column", showInLegend:!1, color:"#1f2d42", dataPoints:[ {
                    label: "2009", y: 100
                }
                , {
                    label: "2010", y: 75
                }
                , {
                    label: "2011", y: 50
                }
                , {
                    label: "2012", y: 75
                }
                , {
                    label: "2013", y: 50
                }
                , {
                    label: "2014", y: 60
                }
                , {
                    label: "2015", y: 40
                }
                , {
                    label: "2016", y: 70
                }
                , {
                    label: "2017", y: 60
                }
                ]
            }
            , {
                type:"column", showInLegend:!1, color:"#e5e5e5", dataPoints:[ {
                    label: "2009", y: 90
                }
                , {
                    label: "2010", y: 65
                }
                , {
                    label: "2011", y: 40
                }
                , {
                    label: "2012", y: 65
                }
                , {
                    label: "2013", y: 55
                }
                , {
                    label: "2014", y: 65
                }
                , {
                    label: "2015", y: 85
                }
                , {
                    label: "2016", y: 55
                }
                , {
                    label: "2017", y: 75
                }
                ]
            }
            ], axisY: {
                tickLength: 0, gridColor: "#fbfcfc", interval: 25, lineColor: "transparent"
            }
            , axisX: {
                tickLength: 10, gridColor: "transparent", lineColor: "transparent", tickColor: "transparent"
            }
        }
        ).render(), e(".hero-slider .slide").length&&e(".hero-slider .slide").each(function() {
            var a=e(this), t=a.find(".slider-bg").attr("src");
            a.css( {
                backgroundImage: "url("+t+")", backgroundSize: "cover", backgroundPosition: "center center"
            }
            )
        }
        )
    }
    )
}
(window.jQuery);