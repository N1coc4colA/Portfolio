function burger_show()
{
    document.getElementById("burger-shw").classList.add("hide");
    document.getElementById("burger-cls").classList.remove("hide");
    let l = document.getElementsByClassName("nav-link");
    for (let i = 0; i < l.length; ++i) {
        if (!l[i].classList.contains("hidden")) {
            l[i].classList.add("show");
        }
    }
}

function burger_close()
{
    document.getElementById("burger-shw").classList.remove("hide");
    document.getElementById("burger-cls").classList.add("hide");
    let l = document.getElementsByClassName("nav-link");
    for (let i = 0; i < l.length; ++i) {
        if (!l[i].classList.contains("hidden")) {
            l[i].classList.remove("show");
        }
    }
}

function getUserLanguage()
{
    const userLang = navigator.language;
    if (userLang != "fr" && userLang != "en") {
        return "en"
    }

    return userLang;
}

// Hide elements depending on the language
const userLang = getUserLanguage();
document.querySelectorAll("a[lang]").forEach(e => {
    if (e.lang !== userLang.slice(0, 2)) {
        e.style.display =  "none";
    }
});
document.querySelectorAll("p[lang]").forEach(e => {
    if (e.lang !== userLang.slice(0, 2)) {
        e.style.display =  "none";
    }
});
document.querySelectorAll("a[lang]").forEach(e => {
    if (e.classList.contains("nav-link") && e.lang !== userLang.slice(0, 2)) {
        e.classList.add("hidden");
    }
});
