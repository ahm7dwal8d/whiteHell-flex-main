let icon = document.getElementById("icon");
let HeaderIcon =document.getElementById("header-icon");
let HeaderIcons = document.getElementById("Header-Icons");
let UlLinks = document.getElementById("links");
let UlLink = document.getElementById("link")

icon.onclick = function () {
    document.body.classList.toggle("dark-thems")
}

HeaderIcon.addEventListener("click" , function () {
    HeaderIcons.style.display = "flex"
    HeaderIcons.style.position = "absolute"
    HeaderIcons.style.right = "147px"
    UlLinks.style.display = "flex"
    UlLinks.style.position = "absolute"
    UlLinks.style.left = "0"
    UlLinks.style.top = "34px"
    UlLinks.style.flexDirection = "column"
    UlLinks.style.zIndex = "5"
    UlLinks.style.backgroundColor = "white"
    UlLinks.style.width = "100%"
    UlLinks.style.transition = "0.4s linear"
})
