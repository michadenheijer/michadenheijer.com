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
    $(message).hide(1500);
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
