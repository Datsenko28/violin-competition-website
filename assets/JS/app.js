$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(); 


    /*Fixed Header */
        checkSkroll(scrollOffset);

        $(window).on("scroll", function() {
            scrollOffset = $(this).scrollTop();

            checkSkroll(scrollOffset);
             
    
        });

        function checkSkroll(scrollOffset) {
            if( scrollOffset >= introH ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

          /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

/*Menu nav toggle (Бургер меню) */
$("#nav__toggele").on("click", function(event) {
    event.preventDefault();

    $("#nav").toggleClass("active");
});




});