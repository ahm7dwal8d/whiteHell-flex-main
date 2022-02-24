let icon = document.getElementById("icon");
let HeaderIcon =document.getElementById("header-icon");
let HeaderIcons = document.getElementById("Header-Icons");
let UlLinks = document.getElementById("links");
let ButtonToTop = document.getElementById("to-top");

icon.onclick = function () {
    document.body.classList.toggle("dark-thems")
}

HeaderIcon.addEventListener("click" , function () {
    HeaderIcons.classList.toggle("active")
    UlLinks.classList.toggle("active")
})

window.onscroll = function () {
    if (window.scrollY >= 600) {
        ButtonToTop.style.opacity = "1"
    } else {
        ButtonToTop.style.opacity = "0"
    }
}

ButtonToTop.onclick = function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth"
    })
}