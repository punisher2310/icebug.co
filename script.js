// Original Cursor Logic
const cursor = document.querySelector(".cursor");
if(window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => { 
        cursor.style.left = e.clientX - 10 + "px"; 
        cursor.style.top = e.clientY - 10 + "px"; 
    });
}

// Original Clock Logic
function updateClock() { 
    document.getElementById('clock').textContent = new Date().toLocaleTimeString('en-US', { hour12: false }); 
}
setInterval(updateClock, 1000); 
updateClock();

// Original GSAP Animations
gsap.from(".anim-up", { 
    y: 50, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 
});

// NAYA: SOW Viewer Logic (Drive to Iframe)
function openSOW(link, title) {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    
    // Google Drive hack for iframe display
    let embedLink = link.replace('/view?usp=sharing', '/preview');
    
    document.getElementById('modalTitle').innerText = title;
    frame.src = embedLink;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // background scroll block
}

function closeSOW() {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    
    modal.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto";
}
