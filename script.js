// LOADER
let progress = 0;

let bar = document.getElementById("loaderProgress");
let text = document.getElementById("loaderText");

let load = setInterval(()=>{
    progress += 2;
    bar.style.width = progress + "%";
    text.innerText = progress + "%";

    if(progress >= 100){
        clearInterval(load);
        document.getElementById("loader").style.display = "none";
    }
},30);


// MENU (TOGGLE OPEN/CLOSE SAME BUTTON)
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu(){
    const isOpen = menu.classList.contains("active");

    if(isOpen){
        menu.classList.remove("active");
        overlay.style.display = "none";
    } else {
        menu.classList.add("active");
        overlay.style.display = "block";
    }
}

overlay.addEventListener("click", ()=>{
    menu.classList.remove("active");
    overlay.style.display = "none";
});


// DATE FIX
const d = new Date();
document.getElementById("year").textContent =
`${d.getDate()} ${d.toLocaleString('en-US',{month:'long'})} ${d.getFullYear()}`;