$('.wrapper').click(function() {
    $(this).toggleClass('spoiler_open');
    $(this).find('.features_link_arrow').toggleClass('arrow_rotate')
});
$('#features').click(function() {
    $('.member_window').addClass('member_window_close');
    $('.features_window').toggleClass('features_window_close');
});
$('#member').click(function() {
    $('.features_window').addClass('features_window_close')
    $('.member_window').toggleClass('member_window_close');
});



if ($(window).width() < 980) {
    $('#member').attr("href", "membership.html");
    $('#features').attr("href", "features.html");
}