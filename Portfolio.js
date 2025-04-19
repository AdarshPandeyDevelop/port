const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    
});



let btn = document.querySelector("#menu")
let currState = "hidden"

btn.addEventListener("click", () => {
    if (currState === "hidden") {
        currState = "block" // <- fixed this line
        document.getElementById("list").style.display = "block"
        document.getElementById("nav").style.height = "auto"
        document.getElementById("main").style.paddingTop = "15vh"
    } else {
        currState = "hidden"
        document.getElementById("list").style.display = "none"
        document.getElementById("nav").style.height = "auto"
        document.getElementById("main").style.paddingTop = "0vh"
    }
})