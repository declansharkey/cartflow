$(document).ready(function () {
    $(".club-select button").click(function () {

        if ($('.clubs-list').hasClass('hidden')) {
            setTimeout(function () {
                TweenMax.set($('.clubs-list'), { className: "-=hidden" });
                TweenMax.fromTo($('.clubs-list'), 0.3, { y: -20, opacity: 0, maxHeight: '0' }, { y: 0, opacity: 1, maxHeight: '800px' })
            }, 500);

        } else {
            var tl = new TimelineMax();
            tl.to($('.clubs-list'), 0.3, { y: -20, opacity: 0, maxHeight: '0' }, 0);
            tl.set($('.clubs-list'), { className: "+=hidden" }, 0.3);
        }
    });
});