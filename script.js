// Cursor
const cursor = document.querySelector(".cursor");
if(window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX - 10 + "px";
        cursor.style.top = e.clientY - 10 + "px";
    });
}

// Modal Logic
function openSOW(link, title) {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    
    let embedLink = link.replace('/view?usp=sharing', '/preview');
    
    document.getElementById('modalTitle').innerText = title;
    frame.src = embedLink;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeSOW() {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    modal.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto";
}

// GSAP Animations
gsap.from(".anim-up", {
    y: 50, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out"
});
