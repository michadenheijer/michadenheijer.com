var message = document.getElementById("lang-message");
var importLang = window.location.pathname;
var currentLang = importLang.substring(1, importLang.lastIndexOf('/'));
if (currentLang == '/') {
    currentLang = 'en'
}
var oppLang;
if (currentLang == 'en') {
    oppLang = 'nl';
} else {
    oppLang = 'en';
}
var extLang = '/' + oppLang + '/'
var userLang = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);

$(document).ready(function () {
    if (currentLang == 'nl' && userLang == 'nl') {
        message.style.display = 'none';
    } else if (currentLang != 'nl' && userLang != 'nl') {
        message.style.display = 'none';
    } else {
        message.style.display = 'inline';
    }
});

function setLang(lang) {
    localStorage.setItem('lang', lang);
    return;
}

$("#button-close").click(function () {
    $(message).hide(1500);
    setLang(currentLang);
});

$("#button-change-lang").click(function () {
            setLang(oppLang);
            window.location.href = "https://michadenheijer.com" + extLang + page;

            $("#button-en").click(function () {
                setLang('en');
                window.location.href = "https://michadenheijer.com/"
            });

            $("#button-en-pr").click(function () {
                setLang('en');
                window.location.href = "https://michadenheijer.com/projects"
            });

            $("#button-en-sm").click(function () {
                setLang('en');
                window.location.href = "https://michadenheijer.com/social-media"
            });

            $("#button-nl").click(function () {
                setLang('nl');
                window.location.href = "https://michadenheijer.com/nl/"
            });

            $("#button-nl-pr").click(function () {
                setLang('nl');
                window.location.href = "https://michadenheijer.com/nl/projecten"
            });

            $("#button-nl-sm").click(function () {
                setLang('nl');
                window.location.href = "https://michadenheijer.com/nl/sociale-media"
            });
