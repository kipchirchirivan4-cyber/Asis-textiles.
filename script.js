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


// MENU FIX (WORKING VERSION)
let menu = document.getElementById("sideMenu");
let overlay = document.getElementById("overlay");

let isOpen = false;

function toggleMenu(){
    if(isOpen){
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu(){
    menu.style.right = "0px";
    overlay.style.display = "block";
    isOpen = true;
}

function closeMenu(){
    menu.style.right = "-260px";
    overlay.style.display = "none";
    isOpen = false;
}


// YEAR
document.getElementById("year").textContent = new Date().getFullYear();
