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


// MENU
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu(){
    menu.classList.toggle("active");
    overlay.style.display = menu.classList.contains("active") ? "block" : "none";
}

function closeMenu(){
    menu.classList.remove("active");
    overlay.style.display = "none";
}

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".side-menu a").forEach(a=>{
    a.addEventListener("click", closeMenu);
});


// AUTO DATE
const d = new Date();
document.getElementById("year").textContent =
`${d.getDate()} ${d.toLocaleString('en-US',{month:'long'})} ${d.getFullYear()}`;


/// SCROLL HINT
const scrollHint = document.getElementById("scrollHint");

window.addEventListener("scroll", function(){
    if(window.scrollY > 80){
        scrollHint.style.display = "none";
    }
});