window.addEventListener("load", function () {

    const slideContainer = document.querySelector(".first-slide-inner");
    const mainWrapper = document.querySelector(".animated-image-inner");
    const thirdSlide = document.querySelector(".third-slide-animation");

    setTimeout(() => {
        slideContainer.classList.add("animate-slides");
    }, 2000);

    const lastSlide = document.querySelector(".sixth-slide");

    lastSlide.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "left") {
            lastSlide.removeEventListener("transitionend", handler);

            mainWrapper.classList.add("show-second");

            const secondSection = document.querySelector(".second-slide-animation");

            secondSection.addEventListener("transitionend", function handler2(e2) {
                if (e2.propertyName === "opacity") {
                    secondSection.removeEventListener("transitionend", handler2);

                    mainWrapper.classList.add("move-up");

                    thirdSlide.style.transition = "opacity 2s ease, transform 2s ease";
                    thirdSlide.style.transform = "translate(0px, 0px)";
                }
            });
        }
    });

});