function burger_show()
{
    console.log("Showing.");
    document.getElementById("burger-shw").classList.add("hide");
    document.getElementById("burger-cls").classList.remove("hide");
    let l = document.getElementsByClassName("nav-link");
    for (let i = 0; i < l.length; ++i) {
        l[i].classList.add("show");
    }
}

function burger_close()
{
    console.log("Hiding.");
    document.getElementById("burger-shw").classList.remove("hide");
    document.getElementById("burger-cls").classList.add("hide");
    let l = document.getElementsByClassName("nav-link");
    for (let i = 0; i < l.length; ++i) {
        l[i].classList.remove("show");
    }
}
