// Magic Cursor Logic (Follows Mouse smoothly)
const cursor = document.querySelector(".cursor");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor delay using requestAnimationFrame
function animateCursor() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;
    cursorX = cursorX + (distX * 0.2);
    cursorY = cursorY + (distY * 0.2);
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

// GSAP Cinematic Reveal
gsap.from(".navbar", {
    y: -30,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".anim-elem", {
    y: 60,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2, // Ek ke baad ek reveal hoga
    ease: "expo.out",
    delay: 0.3
});

// Orb breathing animation
gsap.to(".glow-orb", {
    scale: 1.2,
    opacity: 0.6,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
