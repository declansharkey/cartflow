

$(document).ready(function () {
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

    $(".continue-btn").click(function () {
        $.get("http://127.0.0.1:8887/html-partials/section1.html", function (data) {
            $(".cart-main").html(data).addClass("page-2");
            $(".section1").addClass("delay");
            $(".order-summary").load("index.html .order-summary .ajax-call-orders");
            $(".order-summary").addClass("delay2");
        });
    });

    

    $(document).ajaxComplete(function () {
        $(".page-2 .backbutton").click(function () {
            window.location.href = 'http://127.0.0.1:8887/index.html';
        });
    });


    // View Details Button
    $('.view-details-btn').click(function () {
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
