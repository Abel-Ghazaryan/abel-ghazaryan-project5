let img1 = document.querySelector(".pizza :nth-child(1)")
let img2 = document.querySelector(".pizza :nth-child(2)")
let img3 = document.querySelector(".pizza :nth-child(3)")

let i = 0
setInterval(function(){
    let arr = [img1.src,img2.src,img3.src]
    img2.src = arr[0]
    img2.style.opacity = "0.5"
    img2.style.transition = "0s"
    img3.src = arr[1]    
    img1.src = arr[2] 
    if(i == 2){
        i = 0
    } 
    setTimeout(function(){
        img2.style.transition = ".5s"
        img2.style.opacity = "1"
    },10)
},2000)

let ket1 = document.querySelector(".ket :nth-child(1)")
let ket2 = document.querySelector(".ket :nth-child(2)")
let ket3 = document.querySelector(".ket :nth-child(3)")

let v = 0
setInterval(function(){
    let arr = [ket1.src,ket2.src,ket3.src]
    ket2.src = arr[0]
    ket3.src = arr[1]    
    ket1.src = arr[2] 
    if(v == 2){
        v = 0
    } 
},2000)

let menu = document.querySelector(".headerUl2")
let menuItem = document.querySelector(".headerUl2 li a")
let closeIcon = document.querySelector(".closeIcon")
let menuIcon = document.querySelector(".menuIcon")

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    
  }
}

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);