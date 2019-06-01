var otherLang = "https://michadenheijer.com/nl"
var currentLang = importLang.substring(1, importLang.lastIndexOf('/'));
if (currentLang == '/') {
    currentLang = 'en'
}
if (localStorage.getItem("lang") != currentLang) {
    window.location.href = otherLang;
}
