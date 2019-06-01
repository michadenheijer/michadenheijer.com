var message = document.getElementById("lang-message");
message.style.display = 'none';
$(document).ready(function () {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "nl") {} else if (userLang == "nl-NL") {} else if (userLang == "nl-BE") {} else {
        message.style.display = 'inline';
    }
});

$("#button-close").click(function () {
    $(message).hide(1500);
});

$("#button-en").click(function () {
    window.location.href = "https://michadenheijer.com/"
});

$("#button-en-pr").click(function () {
    window.location.href = "https://michadenheijer.com/projects"
});

$("#button-en-sm").click(function () {
    window.location.href = "https://michadenheijer.com/social-media"
});
