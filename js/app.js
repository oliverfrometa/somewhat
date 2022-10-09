const menuBtn = document.querySelector("#menu-open")
const mobileMenu = document.querySelector("#menu-container")

let toggleMenuStatus = true;
function toggleMenu() {
    if (toggleMenuStatus == true) { 
        mobileMenu.style.transform = "translateY(0)"
         toggleMenuStatus = false;
    } else if (toggleMenuStatus == false) {
        toggleMenuStatus = true;
        mobileMenu.style.transform = "translateY(-25vh)" 
    }
}

const gallery = document.querySelector(".gallery");

gallery.addEventListener("wheel", (evt) => {
    gallery.scrollLeft += evt.deltaY;
});