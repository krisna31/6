// jquery tolong carikan saya el pg-scrl kalo nemu saat di-click jalankan fungsi dibawah ini
$('.page-scroll').on('click', function (e) {

    // ambil href dengan variabel tujuan
    var tujuan = $(this).attr('href');
    //ambil var href dengan var elTujuan
    var elemenTujuan = $(tujuan);


    // scroll di- animasikan dengan ambil dari jquerry easing website
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 888, 'swing');

    // jadi saat href di click tidak akan ada respon nama nya e aja
    e.preventDefault();

});

// saat di load animasi jalan
$(window).on('load', function () {
    $('.pkiri').addClass('pmuncul')
    $('.pkanan').addClass('pmuncul')
})

// scroll di px tertentu fungsi dijalankan
$(window).scroll(function () {
    var wscroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wscroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wscroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wscroll / 1.2 + '%)'
    });

});
