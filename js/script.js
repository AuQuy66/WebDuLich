
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
buttonIcon = document.querySelectorAll(".carousel-button")

let firstImgWidth = firstImg.clientWidth + 14;

buttonIcon.forEach(button => {
    button.addEventListener("click", () => {
        carousel.scrollLeft += button.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});
