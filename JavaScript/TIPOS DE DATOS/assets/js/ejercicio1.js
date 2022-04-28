/* Nivel 1 */

/* const anioNacimiento = parseInt(prompt("Escribe tu año de nacimiento"))
const anioActual = 2022;
console.log(anioNacimiento);

console.log(`Tienes ${anioActual - anioNacimiento} años`);  */

/* Nivel 2 */

/* const anioActual = 2022
const anioNacimiento = parseInt(document.getElementById("anio").value);
console.log(anioNacimiento); */

/* function calcularEdad(){
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    console.log(`Tienes ${anioActual - anioNacimiento} años`)
} */

/* Opción 2 */

/* const boton = document.getElementById("calcular")
console.log(boton);

boton.addEventListener("click", ()=>{
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    console.log(`Tienes ${anioActual - anioNacimiento} años`)
}) */

/* Nivel 3 */


/* const fecha = new Date();
const anioActual = fecha.getFullYear()
console.log(anioActual);

const mesActual = fecha.getMonth() + 1
console.log(mesActual);

const diaActual = fecha.getDate()
console.log(diaActual); */

/* const anioActual = 2022
const mesActual = 4
const diaActual = 27 */

function mostarDatos(){
    const nacimiento = document.getElementById("anio").value;
    console.log(nacimiento);
    const nacimientoDividido = nacimiento.split("-")
    console.log(nacimientoDividido);
    const anioNac = parseInt(nacimientoDividido[0])
    const mesNac = parseInt(nacimientoDividido[1])
    const diaNac = parseInt(nacimientoDividido[2])
    console.log(anioNac, mesNac, diaNac);

    if(mesNac <= mesActual && diaNac <= diaActual){
        console.log(`Tienes ${anioActual - anioNacimiento} años`);
    }
    else{
        console.log(`Tienes ${anioActual - anioNacimiento} años`);

    }

}