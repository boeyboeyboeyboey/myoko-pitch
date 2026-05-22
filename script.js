gsap.registerPlugin(ScrollTrigger);

// --- 1. HERO ANIMATION (The Furoshiki Wrap Transition) ---
const introTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
    },
});

introTl
    .to(".text-white-phase", {
        opacity: 0,
        y: -20,
        duration: 1,
    })
    // The cloth wraps around the screen from the corner
    .to(
        ".bg-green-overlay",
        {
            clipPath: "circle(150% at 100% 100%)",
            duration: 1.5,
            ease: "power1.inOut",
        },
        "<",
    )
    .to(".text-green-phase", {
        opacity: 1,
        y: 0,
        duration: 1,
    });

// --- 2. TEAM SECTION ANIMATION (Keep exactly as before) ---
gsap.to(".panel-track", {
    xPercent: -75,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-section",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=3000",
    },
});
