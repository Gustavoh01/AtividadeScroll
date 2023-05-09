function scrollChangeColor() {
    let header = document.querySelector("header");
    var icon = document.querySelector(".seta");
    if (scrollY > 300 ) {
        header.classList.add("style-background");
        icon.classList.add("active");
    }
    else {
        header.classList.remove("style-background");
        icon.classList.remove("active")
    }
}

window.addEventListener('scroll', scrollChangeColor);