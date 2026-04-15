// LOADER
let percent = 0;
let text = document.getElementById("percent");

let loader = setInterval(() => {
    percent += 2;
    text.innerText = percent + "%";

    if(percent >= 100){
        clearInterval(loader);
        document.getElementById("loader").style.display = "none";
    }
}, 30);


// MENU FIX
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const sound = document.getElementById("menuSound");

function toggleMenu(){
    menu.classList.toggle("active");
    overlay.style.display = menu.classList.contains("active") ? "block" : "none";
    sound.currentTime = 0;
    sound.play();
}

function closeMenu(){
    menu.classList.remove("active");
    overlay.style.display = "none";
}

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".side-menu a").forEach(a=>{
    a.addEventListener("click", closeMenu);
});


// DATE FIX (DAY + MONTH + YEAR)
const d = new Date();

document.getElementById("year").textContent =
`${d.getDate()} ${d.toLocaleString('en-US',{month:'long'})} ${d.getFullYear()}`;