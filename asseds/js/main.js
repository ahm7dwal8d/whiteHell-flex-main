let icon = document.getElementById("icon");
let HeaderIcon =document.getElementById("header-icon");
let HeaderIcons = document.getElementById("Header-Icons");
let UlLinks = document.getElementById("links");
let UlLink = document.getElementById("link")
let GoverBox = document.querySelectorAll("#gover-box")

icon.onclick = function () {
    document.body.classList.toggle("dark-thems")
}

HeaderIcon.addEventListener("click" , function () {
    UlLinks.classList.toggle("active");
    HeaderIcons.classList.toggle("active")
})

GoverBox.addEventListener("click" , function () {
    GoverBox.classList.toggle("active")
})