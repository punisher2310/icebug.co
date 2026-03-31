// Custom Cursor
const cursor = document.querySelector(".cursor");
if(window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX - 10 + "px";
        cursor.style.top = e.clientY - 10 + "px";
    });
}

// SOW Viewer Logic (Drive to Iframe)
function openSOW(link) {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    
    // Google Drive Link Hack
    let embedLink = link.replace('/view?usp=sharing', '/preview');
    
    frame.src = embedLink;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Stop background scroll
}

function closeSOW() {
    const modal = document.getElementById('sowModal');
    const frame = document.getElementById('sowFrame');
    modal.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto";
}
