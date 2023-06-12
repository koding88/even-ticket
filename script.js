// Header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= header.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
    if (window.scrollY === 0) {
        header.classList.remove("fixed");
    }
});