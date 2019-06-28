var pageLang = document.documentElement.lang;
var userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2);
var pairs = {
    index: {
        en: '/',
        nl: '/nl/'
    },
    projects: {
        en: '/my-projects',
        nl: '/nl/projecten'
    },
    socialmedia: {
        en: '/social-media',
        nl: '/nl/sociale-media'
    }
};
var type = [
    {"/": "index"},
    {"/nl/": "index"},
    {"/my-projects", "projects"}
]
/*if (userLang != pageLang) {
    langCheck();
}*/
langCheck();

if (sessionStorage.getItem("first_redirect") == true) {
    first_redirect_message();
    setTimeout(function () {
        sessionStorage.setItem("first_redirect", false);
        localStorage.setItem("redirect", true);
    }, 10 * 1000);
}


function langCheck() {
    var supportedLang = ["en", "nl"];
    var currentPage = window.location.href;
    if (!supportedLang.includes(userLang)) {
        userLang = "en"
    }
    if (userLang == pageLang) {
        return
    }
    if (localStorage.getItem("redirect") == false) {
        return
    } else if (localStorage.getItem("redirect") == true) {
        redirect();
    } else {
        sessionStorage.setItem("first_redirect", true);
        sessionStorage.setItem("redirect_page", currentPage);
        redirect();
    }
}

function redirect() {
    var currentPage = window.location.pathname;

}

function first_redirect_message() {}

function return_to_last_page() {
    redirect_off();
    window.localStorage.href = sessionStorage.getItem("redirect_page");
}

function redirect_on() {
    localStorage.setItem("redirect", true)
}

function redirect_off() {
    localStorage.setItem("redirect", false)
}
