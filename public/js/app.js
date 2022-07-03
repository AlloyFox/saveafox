

document.querySelector('#theme-toggle').addEventListener('change', ()=>{
    document.querySelector('html').classList.toggle('dark')    
});

// const themeToggle = document.querySelector('#theme-toggle');

// themeToggle.addEventListener('change', ()=> {
//     document.querySelector('body').classList.toggle('dark');  
// });







document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav-open");
    });

    document.querySelector(".nav-overlay").addEventListener("click", () => {
        nav.classList.remove("nav-open");
    });
});