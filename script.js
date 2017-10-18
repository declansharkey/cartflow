$(document).ready(function () {
    $(".club-select button").click(function () {

        if ($('.clubs-list').hasClass('hidden')) {
            setTimeout(function () {
                TweenMax.set($('.clubs-list'), { className: "-=hidden" });
                TweenMax.fromTo($('.clubs-list'), 0.3, { y: -20, opacity: 0, maxHeight: '0' }, { y: 0, opacity: 1, maxHeight: '400px' })
            }, 0);

        } else {
            var tl = new TimelineMax();
            tl.to($('.clubs-list'), 0.3, { y: -20, opacity: 0, maxHeight: '0' }, 0);
            tl.set($('.clubs-list'), { className: "+=hidden" }, 0.3);
        }
    });

    $(".continue-btn").click(function () {
        $.get("http://127.0.0.1:8887/html-partials/section1.html", function (data) {
            $(".cart-main").html(data);
            $(".order-summary").load("index.html .order-summary .ajax-call-orders");
        });
    });

    $('.view-details-btn').click(function () {
        var viewDetails = $(this).parent().siblings('.view-details');
        ('.view-details');
        if (viewDetails.hasClass('hidden')) {
            TweenMax.fromTo($(viewDetails), 0.3, { y: -20, maxHeight: 0, opacity: 0 }, { y: 0, maxHeight: '70px', opacity: 1 });
            TweenMax.set($(viewDetails), { className: "-=hidden" });
        }
        else {
            var tl = new TimelineMax();
            tl.to($(viewDetails), 0.3, { y: -20, maxHeight: 0, opacity: 0 }, 0);
            tl.set($(viewDetails), { className: "+=hidden" }, 0.3);
        }
    })
});