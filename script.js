

$(document).ready(function () {
    $(document).on("click", ".club-select button", function () {

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
            $(".section1").addClass("delay");
            $(".order-summary").load("index.html .order-summary .ajax-call-orders").addClass("delay2");
            $(".continue-btn").toggleClass("continue-btn continue-btn-verify");
        });
    });

    $(document).on("click", ".page-2 .continue-btn-verify", function () {
        $.get("http://127.0.0.1:8887/html-partials/verification.html", function (data) {
            $(".cart-main").toggleClass("page-2 page-3").html(data).prepend($("<section class='order-total-wrapper'></section>").load('index.html .order-container'));
        });
    });

    $(document).ajaxComplete(function () {
        $(document).on("click", ".page-2 .backbutton", function () {
            $("#cart-wrapper").append($('.cart-main section').load('index.html .cart-main section'));
        });
    });


    // View Details Button
    $(document).on("click", ".view-details-btn", function () {
        var viewDetails = $(this).parent().siblings('.view-details');
        ('.view-details');
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
