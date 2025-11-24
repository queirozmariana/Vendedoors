let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 60) {
        header.style.transform = "translateY(-100%)";
        header.style.opacity = "0";
    } else {
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
    }

    lastScroll = currentScroll;
});