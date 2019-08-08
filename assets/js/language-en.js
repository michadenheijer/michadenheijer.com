var message = document.getElementById("lang-message");
message.style.display = 'none';
$(document).ready(function () {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "nl") {} else if (userLang == "nl-NL") {} else if (userLang == "nl-BE") {} else {
        message.style.display = 'inline';
    }
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

$("#button-en").click(function () {
    window.location.href = "https://michadenheijer.com/"
});

$("#button-en-pr").click(function () {
    window.location.href = "https://michadenheijer.com/my-projects"
});

$("#button-en-sm").click(function () {
    window.location.href = "https://michadenheijer.com/social-media"
});
