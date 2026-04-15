// =====================
// LOADER (unchanged)
// =====================
let percent = 0;
let text = document.getElementById("percent");

let loader = setInterval(() => {
    percent += 2;
    text.innerText = percent + "%";

    if (percent >= 100) {
        clearInterval(loader);
        document.getElementById("loader").style.display = "none";
    }
}, 30);


// =====================
// MENU FIX (GLOBAL FUNCTIONS)
// =====================
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
    menu.classList.add("active");
    overlay.style.display = "block";
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.style.display = "none";
}

function toggleMenu() {
    if (menu.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Make functions accessible to HTML onclick
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;


// Close when clicking overlay
overlay.addEventListener("click", closeMenu);


// Close when clicking menu links
document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});


// =====================
// AUTO DATE
// =====================
const dateElement = document.getElementById("year");

const d = new Date();
const day = d.getDate();
const month = d.toLocaleString('en-US', { month: 'long' });
const year = d.getFullYear();

dateElement.textContent = `${day} ${month} ${year}`;