const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("active")
  nav.classList.toggle("active")
});

document.addEventListener("scroll", () =>{
  const header = document.querySelector("header");

  if(window.scrollY > 0){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
});