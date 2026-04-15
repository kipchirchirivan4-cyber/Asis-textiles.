let percent = 0;
let text = document.getElementById("percent");

// LOADER
let loader = setInterval(() => {
    percent += 2;
    text.innerText = percent + "%";
    if(percent >= 100){
        clearInterval(loader);
        document.getElementById("loader").style.display="none";
    }
},30);


// MENU + SOUND
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const sound = document.getElementById("menuSound");

function playSound(){
    sound.currentTime = 0;
    sound.play();
}

function toggleMenu(){
    menu.classList.toggle("active");
    overlay.style.display = menu.classList.contains("active") ? "block" : "none";
    playSound();
}

function closeMenu(){
    menu.classList.remove("active");
    overlay.style.display = "none";
    playSound();
}

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".side-menu a").forEach(a=>{
    a.addEventListener("click", closeMenu);
});


// DATE
const d = new Date();
document.getElementById("year").textContent =
`${d.getDate()} ${d.toLocaleString('en-US',{month:'long'})} ${d.getFullYear()}`;


// SCROLL HINT
const scrollHint = document.getElementById("scrollHint");

window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        scrollHint.style.opacity = "0";
    }
});