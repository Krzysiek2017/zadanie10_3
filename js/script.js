$(function() {

    var carouselList = $("#carousel ul");

    setInterval(changeSlide, 3000);

    function changeSlide() {
        carouselList.animate({
            'marginLeft': -400
        }, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = $('#carousel').find('li:first');
        var lastItem = $('#carousel').find('li:last');

        lastItem.after(firstItem);
        carouselList.css({
            marginLeft: 0
        });
    }
});