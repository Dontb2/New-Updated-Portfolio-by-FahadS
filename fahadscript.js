document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll(".quarter-btn");
        const quarters = document.querySelectorAll(".quarter");
        
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                quarters.forEach(q => q.classList.remove("active"));
                document.querySelector(`.${button.dataset.quarter}`).classList.add("active");
            });
        });
    });

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}


