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

// const carouselContainer = document.querySelector(".carousel-container");

// carouselContainer.addEventListener("wheel", (evt) => {
//     carouselContainer.scrollLeft += evt.deltaY;
//     console.log(carousel)
// });

const scrollContainer = document.querySelector(".carousel-container");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

console.log("hello")