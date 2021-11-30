!(function (a) {
    "use strict";
    a(document).ready(function () {
        a(".owl-carousel").each(function () {
            var t = {
                items: 3,
                margin: 0,
                loop: !1,
                center: !1,
                mousedrag: !0,
                touchdrag: !0,
                pulldrag: !0,
                nav: !1,
                navtext: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                dots: !1,
                dotsdata: !1,
                autoplay: !1,
                smartspeed: 650,
                animateout: null,
                autoplayHoverPause: !0,
                animatein: null,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
            };
            for (var e in t) t.hasOwnProperty(e) && null != a(this).attr("data-carousel-" + e) && (t[e] = a(this).data("carousel-" + e));
            a(this).owlCarousel({
                margin: t.margin,
                loop: t.loop,
                center: t.center,
                mouseDrag: t.mousedrag,
                touchDrag: t.touchdrag,
                pullDrag: t.pulldrag,
                nav: t.nav,
                navText: t.navtext,
                dots: t.dots,
                dotsData: t.dotsdata,
                autoplay: t.autoplay,
                smartSpeed: t.smartspeed,
                animateIn: t.animatein,
                animateOut: t.animateout,
                autoplayHoverPause: t.autoplayHoverPause,
                responsive: { 0: { items: t.xs }, 480: { items: t.sm }, 768: { items: t.md }, 992: { items: t.lg }, 1200: { items: t.items } },
            });
        });
    }),
        a(".client-speaks.owl-carousel").owlCarousel({
            loop: !0,
            items: 1,
            margin: 0,
            autoplayHoverPause: !0,
            nav: !1,
            navtext: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoHeight: !0,
            onTranslate: function (t) {
                var e, o;
                (o = { event: "command", func: "pauseVideo" }), null != (e = a(".owl-item.active").find(".flex-video iframe").get(0)) && e.contentWindow.postMessage(JSON.stringify(o), "*");
            },
        });
})(jQuery);
