// Custom Cursor Logic
const cursor = document.querySelector(".cursor");
if(window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX - 10 + "px";
        cursor.style.top = e.clientY - 10 + "px";
    });
}

// SOW Viewer Logic (No-Exit Experience)
function openSOW(link, title) {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    
    // Google Drive Link Hack for Iframe Preview
    let embedLink = link.replace('/view?usp=sharing', '/preview');
    
    document.getElementById('modalTitle').innerText = title;
    frame.src = embedLink;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Stop background scroll
}

function closeSOW() {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    modal.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto"; // Re-enable scroll
}
