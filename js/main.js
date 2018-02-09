$(document).ready(function() {

    // Slider
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        asNavFor: '.slider-mini',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });

    $('.slider-mini').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider',
        focusOnSelect: true
    });

    // Mobile Drop Menu
    $('.mobile-dropmenu__button').on('click', function(e) {
        $(this).toggleClass('open');
        $('.mobile-dropmenu__box').toggleClass('open');
        // $('body').toggleClass('md-body');
        e.preventDefault();
    });

    // Popup
    $(".fadeScreen, .popup-close").on('click', function() {
        $(".fadeScreen").fadeOut(300);
        $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
        return false;
    });
    $(".popup-open").click(function() {
        $(".popup-box").removeClass('close');
        $('.popup-box.'+$(this).attr('data-open')).fadeIn(200).addClass('open');
        $(".fadeScreen").fadeIn(300);
        return false;
    });
     
    // Tabs Menu
    $(".tabs-menu").hide();
    $(".tabs-menu:first").show();   
       $(".tabs-content li:first").addClass("active").show(); 
       $(".tabs-content li").click(function() {
            $(".tabs-content li").removeClass("active"); 
            $(this).addClass("active");
            $(".tabs-menu").hide(); 
            var activeTab = $(this).find("a").attr("href"); 
            $(activeTab).fadeIn(); 
       return false;
    });

    // Accordion
    $('.accordion-open').click(function() {
        var wrap = $('.accordion-wrap'),
            text = $('.accordion-text'),
            textCurrent = $(this).closest(wrap).find(text),
            wrapCurrent = $(this).closest(wrap);
        wrap.not(wrapCurrent).find(text).slideUp();
        textCurrent.slideToggle();
        wrap.not(wrapCurrent).find('.accordion-close').hide();
        wrapCurrent.find('.accordion-close').toggle();
    });
    $('.accordion-close').click(function() {
        $(this).prev('.accordion-text').slideUp();
        $(this).hide();
    });

});