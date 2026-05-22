// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// --- 1. HERO ANIMATION (White to Green Transition) ---
const introTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Smooth animation tracking with the scrollbar
    },
});

// Phase A: Fade out the initial text
introTl
    .to(".text-white-phase", {
        opacity: 0,
        y: -30,
        duration: 1,
    })
    // Phase B: Fade in the green background overlay concurrently ("<" means sync with previous action)
    .to(
        ".bg-green-overlay",
        {
            opacity: 1,
            duration: 1.5,
        },
        "<",
    )
    // Phase C: Fade in the green-phase tagline
    .to(".text-green-phase", {
        opacity: 1,
        y: 0,
        duration: 1,
    });

// --- 2. TEAM SECTION ANIMATION (Horizontal Scroll Jack) ---
gsap.to(".panel-track", {
    xPercent: -75, // Since there are 4 panels, we shift 75% left to show the last one
    ease: "none", // Crucial for consistent scroll speed
    scrollTrigger: {
        trigger: ".horizontal-section",
        pin: true, // Lock the viewport vertically
        scrub: 1, // Adds a 1-second delay catch-up for ultra-smooth gliding
        start: "top top",
        end: "+=3000", // The longer the number, the slower the user scrolls through panels
    },
});
