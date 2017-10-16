$(document).ready(function () {
    $(".club-select button").click(function () {
        if ($('.clubs-list').hasClass('hidden')) {
            $('.clubs-list').removeClass("hidden");
        }
    });
});