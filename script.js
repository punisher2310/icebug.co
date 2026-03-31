// Custom Cursor Logic
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// GSAP Animations (2026 Style Reveal)
gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".anim-text", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2, // Ek ke baad ek aayenge
    ease: "power4.out",
    delay: 0.5
});