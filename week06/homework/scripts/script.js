$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000,
        keyboard: false
    });

    let carouselPaused = false;
    $('.js-carousel-pause').click(function() {
        if (carouselPaused) {
            $('.carousel').carousel('cycle');
            $(this).text("Pause");
        } else {
            $('.carousel').carousel('pause');
            $(this).text("Play");
        }

        carouselPaused = !carouselPaused;

    })


    $('#newsletterModal').modal('show');

})