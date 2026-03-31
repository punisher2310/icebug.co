// Magic Cursor Logic
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
});

// Live Clock for that Tech vibe
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);

// GSAP Reveal
gsap.from(".anim-up", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    delay: 0.2
});
