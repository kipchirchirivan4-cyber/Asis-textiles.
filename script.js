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
let menu = document.getElementById("sideMenu");
let overlay = document.getElementById("overlay");

function toggleMenu(){
    menu.style.right === "0px" ? closeMenu() : openMenu();
}

function openMenu(){
    menu.style.right="0px";
    overlay.style.display="block";
}

function closeMenu(){
    menu.style.right="-250px";
    overlay.style.display="none";
}

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();
