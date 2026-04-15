// LOADER
let percent = 0;
let text = document.getElementById("percent");

let loader = setInterval(() => {
    percent += 2;
    text.innerText = percent + "%";

    if(percent >= 100){
        clearInterval(loader);
        document.getElementById("loader").style.display="none";
    }
},30);


// MENU
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

overlay.addEventListener("click", ()=>{
    menu.classList.remove("active");
    overlay.style.display="none";
});


// YEAR
document.getElementById("year").textContent =
new Date().getFullYear();
