//importaciones simple en la parte superior del archivo
// import { exprciones } from "./expreciones.js"
import { expreciones}  from "./expreciones.js";

let inputs = document.getElementsByClassName("formulario__entrada") // Estamos seleccionando todos los inputs del formulario, se puede seleccionar por etiquita o por clase

let arregloInputs = [...inputs]
// console.log(inputs)
// console.log(arregloInputs)
arregloInputs.map((inputs)=> {
   inputs.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    switch(e.target.name){
        case "nombre":
            if(expreciones.texto.test(e.target.value)){
                e.target.style.borderColor = "green"//forma dinamica de cambiar estilos y señalar que el campo es correcto
                //e.target.style.color = "green"
                
            } else {
               document.getElementById("nombre").style.borderColor = "red" //forma dinamica de cambiar estilos y señalar que el campo es incorrecto
               // document.getElementById("nombre").style.color = "red"
            }
            break;
        case "documento":
            if (expreciones.numero.test(e.target.value)){
                e.target.classList.add("correcto")
                e.target.classList.remove("incorrecto")

            } else {
                e.target.classList.add("incorrecto")
                e.target.classList.remove("correcto")
            }
            break;
             case "apellido":
            if (expreciones.texto.test(e.target.value)){
                e.target.classList.add("correcto")
                e.target.classList.remove("incorrecto")
            } else {
                e.target.classList.add("incorrecto")
                e.target.classList.remove("correcto")
            }
            break;
    }
   });
});
