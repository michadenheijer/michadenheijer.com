var message = document.getElementById("lang-message");
message.style.display = 'none';
$(document).ready(function () {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "nl") {
        message.style.display = 'inline';
    } else if (userLang == "nl-NL") {
        message.style.display = 'inline';
    } else if (userLang == "nl-BE") {
        message.style.display = 'inline';
    } else {}
});

$("#button-close").click(function () {
    if (window.Modernizr && !window.Modernizr.csstransistions) {
        $("#lang-message").fadeOut(800);
        return;
    }
    message.style.transition = '0.8s';
    message.style.opacity = 0;
    setTimeout(function () {
        message.style.display = "none";
    }, 800);
});

$("#button-nl").click(function () {
    window.location.href = "https://michadenheijer.com/nl"
});

$("#button-nl-pr").click(function () {
    window.location.href = "https://michadenheijer.com/nl/projecten"
});

$("#button-nl-sm").click(function () {
    window.location.href = "https://michadenheijer.com/nl/sociale-media"
});
