var menu = $("#menu");
menu.css({}).animate({
    'right': '-20em'
});
$(".toggle").click(function () {
    menu.css({
        'visibility': 'visible',
        'right': '-20em'
    }).animate({
        'right': '0em'
    });
});

function closeMenu() {
    menu.css({
        'right': '20em',
        'visibility': 'visible'
    }).animate({
        'right': '-20em',
        'visibility': 'hidden'
    });
    return true;
}
