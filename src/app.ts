const style:any = document.getElementById("stylesheet");
const btn1:any = document.getElementById("btn1");
const btn2:any = document.getElementById("btn2");

btn1.addEventListener("click", () =>{
    style.setAttribute("href", "stylesheet1.css");
    btn1.disabled = !btn1.disabled;
    btn2.disabled = !btn2.disabled;
})

btn2.addEventListener("click", () =>{
    style.setAttribute("href", "stylesheet2.css");
    btn1.disabled = !btn1.disabled;
    btn2.disabled = !btn2.disabled;
})