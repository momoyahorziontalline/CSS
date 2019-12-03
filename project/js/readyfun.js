// 輪播
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// end 輪播


// 表格捲軸陰影


$(document).ready(function () {
    $(".table_wrap").on("scroll", function () {
        var cur = $(this).scrollLeft();
        if (cur == 0) {
            $('.table_scroll').addClass('shadow_right').removeClass('shadow_left');
        }
        else {
            var max = $(this)[0].scrollWidth - $(this).parent().width();
            if (cur == max) {
                $('.table_scroll').addClass('shadow_left').removeClass('shadow_right');
            } else {
                $('.table_scroll').addClass('shadow_right shadow_left');
            }
        }
    });
    $(".table_wrap").trigger("scroll"); 
});




// end 表格捲軸陰影

