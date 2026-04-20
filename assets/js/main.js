gsap.registerPlugin(ScrollTrigger);

const slideContainer = document.querySelector(".first-slide-inner");
const mainWrapper = document.querySelector(".animated-image-inner");
const thirdSlide = document.querySelector(".third-slide-animation");

// Create timeline
const tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".animated-image-main",
    start: "top top",
    end: "+=200%",
    scrub: 1.5,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true
}
});


// -----------------------------
// LAYER ORDER (FIX)
// -----------------------------
tl.set(".second-slide-animation", { zIndex: 10 }, 0);
tl.set(".third-slide-animation", { zIndex: 5 }, 0);


// -----------------------------
// STEP 1 — Spread slides
// -----------------------------
tl.to(".first-slide", { left: "0%", duration: 1 }, 0)
  .to(".second-slide", { left: "16.6667%", duration: 1 }, 0)
  .to(".third-slide", { left: "33.3333%", duration: 1 }, 0)
  .to(".fourth-slide", { left: "50%", duration: 1 }, 0)
  .to(".fifth-slide", { left: "66.6667%", duration: 1 }, 0)
  .to(".sixth-slide", { left: "83.3333%", duration: 1 }, 0);


// -----------------------------
// STEP 2 — Fade first → second
// -----------------------------
tl.to(".first-slide-animation", {
    opacity: 0,
    duration: 0.8
}, "fade");

tl.to(".second-slide-animation", {
    opacity: 1,
    duration: 0.8
}, "<");


// -----------------------------
// STEP 3 — Move second slide up
// -----------------------------
tl.to(".second-slide-animation", {
    y: () => -(thirdSlide.offsetHeight - 5), // overlap by 5px to prevent white line gap
    duration: 1,
    ease: "none"
}, "moveUp");


// -----------------------------
// STEP 4 — Bring third slide (FIXED TIMING)
// -----------------------------
tl.set(".third-slide-animation", {
    opacity: 1 // Start opacity 1 for smooth transform reveal or fade explicitly
});

tl.fromTo(thirdSlide,
    { y: "100%" },
    {
        y: "0%",
        duration: 1,
        ease: "none"
    },
    "moveUp" // Start exactly when second slide moves up
);


// -----------------------------
// OPTIONAL — clean fade-in
// -----------------------------
tl.fromTo(thirdSlide,
    { opacity: 0 },
    { opacity: 1, duration: 0.6 },
    "moveUp"
);