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
        $('body').toggleClass('fade');
        $(this).toggleClass('open');
        $('.mobile-dropmenu__box').toggleClass('open');
        $(".fadeScreenGlobal").fadeToggle(300);
        e.preventDefault();
    });
    $(".fadeScreenGlobal").on('click', function() {
        $('.mobile-dropmenu__button').removeClass('open');
        $('.mobile-dropmenu__box').removeClass('open');
        $('body').removeClass('fade');
        $(this).fadeOut(300);
        return false;
    });

    // Modals
    $(".fadeScreen, .popup-close").on('click', function() {
        $('body').removeClass('fade');
        $(".fadeScreen").fadeOut(300);
        $(".popup-wrap").fadeOut(500);
        $(".popup-box").removeClass('open').addClass('close').delay(500).fadeOut();
        return false;
    });
    $(".popup-open").click(function() {
        $(".popup-wrap").delay(300).show();
        $(".popup-box").removeClass('close');
        $('body').addClass('fade');
        $('.popup-box.'+$(this).attr('data-open')).delay(300).fadeIn(200).addClass('open');
        $(".fadeScreen").fadeIn(300);
        return false;
    });

    // Tabs Menu
    var tabsContent = ".tabs-content",
        tabsMenu    = ".tabs-menu",
        tabsBtn     = ".tabs-btn";
    $(tabsContent).hide();
    $(tabsContent + ".active").show();
    $(tabsBtn).on('click', function(e) {
        var currentTab = $(this).attr("href"); 
        $(this).closest( $(tabsMenu) ).find(tabsBtn).removeClass("active");
        $(this).addClass("active");
        $(tabsContent + '.' + $(this).attr('data-tabs')).hide(); 
        $(currentTab).fadeIn();
        e.preventDefault();
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