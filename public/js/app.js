

document.querySelector('#toggle').addEventListener('change', ()=>{
    const darkBtn = document.querySelector("#toggle");
    
    document.querySelector('html').classList.toggle('dark'); 
});
document.querySelector('#toggle2').addEventListener('change', ()=>{
    const darkBtn = document.querySelector("#toggle2");
    
    document.querySelector('html').classList.toggle('dark'); 
});

// const themeToggle = document.querySelector('#theme-toggle');

// themeToggle.addEventListener('change', ()=> {
//     document.querySelector('body').classList.toggle('dark');  
// });







document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#nav");
    const navBtn = document.querySelector("#btnNav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        navBtn.classList.toggle("tham-active");
        nav.classList.toggle("translate-x-0");
    });

    // document.querySelector(".nav-overlay").addEventListener("click", () => {
    //     nav.classList.remove("nav-open");
    // });
});