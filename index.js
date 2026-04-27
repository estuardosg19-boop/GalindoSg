let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
let boton=document.getElementById("boton")
let contador=document.getElementById("contador")


boton.addEventListener("click",suma)

function suma(){
    let r=Number(n1.value)
    let r2=Number(n2.value)
    let resultado=r+r2

contador.textContent=resultado

}
