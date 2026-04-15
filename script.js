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
// MENU (FIXED & RELIABLE)
// =====================
document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    const btn = document.querySelector(".menu-btn");

    function openMenu() {
        menu.classList.add("active");
        overlay.style.display = "block";
    }

    function closeMenu() {
        menu.classList.remove("active");
        overlay.style.display = "none";
    }

    btn.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".side-menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

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