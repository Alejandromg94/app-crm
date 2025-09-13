let inputs = document.getElementsByClassName("formulario__entrada") // Estamos seleccionando todos los inputs del formulario, se puede seleccionar por etiquita o por clase

let arregloInputs = [...inputs]

console.log(inputs)
console.log(arregloInputs)



arregloInputs.map((inputs)=> {
    console.log(inputs)
})
