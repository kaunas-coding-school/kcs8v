var tabs = $('.tabs');


$('.tab').hide();

tabs.find('a').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('current')) {
        slideContentUp(this.hash, 0, 300, false);
        tabs.find('.current').removeClass('current');
        return;
    }
    tabs.find('.current').removeClass('current');
    $(this).addClass('current');
    slideContentUp(this.hash, 350, 300, true);

    slideContentDown(this.hash, 0, 300);
}).first().click();




function slideContentUp(hash, delay, speed, sibling) {
    if (sibling)
        $(hash).delay(delay).siblings().slideUp(speed, "swing");
    else
        $(hash).delay(delay).slideUp(speed, "swing");
}

function slideContentDown(hash, delay, speed) {
    $(hash).delay(delay).slideDown(speed, "swing");
}