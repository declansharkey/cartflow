$(document).ready(function () {
    
        function enterToPage1() {
            // TweenMax.set($(".section1, .pay-method, .order-summary"), {opacity: 0});
            TweenMax.fromTo($(".section1"), 0.3, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut });
            TweenMax.fromTo($(".pay-method"), 0.3, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut });
            TweenMax.fromTo($(".order-summary"), 0.3, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut });
        }
        enterToPage1();
    
    
        $(".club-select button").click(function () {
    
            if ($('.clubs-list').hasClass('hidden')) {
                setTimeout(function () {
                    TweenMax.set($('.clubs-list'), { className: "-=hidden" });
                    TweenMax.fromTo($('.clubs-list'), 0.3, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
                    TweenLite.set($('.clubs-list'), { height: 'auto' });
                    TweenLite.from($('.clubs-list'), 0.3, { height: 0 });
                }, 0);
    
            } else {
                var tl = new TimelineMax();
                tl.to($('.clubs-list'), 0.3, { y: -20, opacity: 0, height: 0 }, 0);
                tl.set($('.clubs-list'), { className: "+=hidden" }, 0.3);
            }
        });
    
    
        $(document).on("click", ".continue-btn", function () {
            $.get("http://127.0.0.1:8887/html-partials/section1.html", function (data) {
                $(".cart-main").html(data).addClass("page-2");
                $(".order-summary").load("index.html .order-summary .ajax-call-orders");
                $(".continue-btn").toggleClass("continue-btn continue-btn-verify");
                
                if ($(".cart-main").hasClass('page-2')) {
                    var hd = new TimelineMax();
                    TweenLite.set($('.page-2'), { height: 'auto' });
                    hd.fromTo($(".revieworder"), 0.3, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut }, .1);
                    hd.fromTo($(".section1"), 0.3, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut }, .2);
                    hd.fromTo($(".order-summary"), 0.3, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut }, .3);
                }
            });
        });
    
        $(document).on("click", ".page-2 .continue-btn-verify", function () {
            $.get("http://127.0.0.1:8887/html-partials/verification.html", function (data) {
                $(".cart-main").toggleClass("page-2 page-3").html(data).prepend($("<section class='order-total-wrapper'></section>").load('index.html .order-container'));
            });
        });

        
        // $(document).ajaxComplete(function () {
            $(document).on("click", ".page-2 .backbutton", function () {
    
                function loadPageOneContent() {
                    $("#cart-wrapper").append($('.cart-main').load('index.html .cart-main section'));
                }
    
                if ($(".cart-main").hasClass('page-2')) {
                    var hl = new TimelineMax();
                    hl.fromTo($(".revieworder"), .5, { opacity: 1 }, { opacity: 0 });
                    hl.fromTo($(".section1"), .5, { opacity: 1 }, { opacity: 0 }, 0);
                    hl.fromTo($(".order-summary"), .5, { opacity: 1 }, { opacity: 0 }, 0);
                    hl.set($(".cart-main"), { className: "-=page-2" }, .5);
    
                    hl.add(loadPageOneContent, 0.5);
                    hl.add(enterToPage1, 0.6);
    
                }
            });
        // });
    
    
        // View Details Button
        $(document).on("click", ".view-details-btn", function () {
            var viewDetails = $(this).parent().siblings('.view-details');
            if (viewDetails.hasClass('hidden')) {
                TweenMax.fromTo($(viewDetails), 0.3, { y: -20, opacity: 0 }, { y: 0, opacity: 1 });
                TweenLite.set($(viewDetails), { height: 'auto' });
                TweenLite.from($(viewDetails), 0.3, { height: 0 });
                TweenMax.set($(viewDetails), { className: "-=hidden" });
                $(this).text('- Hide details');
            }
            else {
                var tl = new TimelineMax();
                tl.to($(viewDetails), 0.3, { y: -20, height: 0, opacity: 0 }, 0);
                tl.set($(viewDetails), { className: "+=hidden" }, 0.3);
                $(this).text('+ View details');
            }
        })
    });
    