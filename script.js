// =====================
// LOADER
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
// MENU FIX (WORKING)
// =====================
document.addEventListener("DOMContentLoaded", function () {

    let menu = document.getElementById("sideMenu");
    let overlay = document.getElementById("overlay");

    function openMenu() {
        menu.style.right = "0px";
        overlay.style.display = "block";
    }

    function closeMenu() {
        menu.style.right = "-260px";
        overlay.style.display = "none";
    }

    function toggleMenu() {
        if (menu.style.right === "0px") {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Make functions accessible from HTML onclick
    window.toggleMenu = toggleMenu;
    window.closeMenu = closeMenu;
});


// =====================
// AUTO DATE (DAY MONTH YEAR)
// =====================
const dateElement = document.getElementById("year");

const d = new Date();
const day = d.getDate();
const month = d.toLocaleString('en-US', { month: 'long' });
const year = d.getFullYear();

dateElement.textContent = `${day} ${month} ${year}`;