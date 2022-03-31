// toggle navbar

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// Close nav when clicking on a menu item
document.addEventListener("clicik", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});