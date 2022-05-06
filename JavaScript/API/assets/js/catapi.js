const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById("gatito")

fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    console.log(datos[0]);
    imagen.src = datos[0].url
})
const boton = document.getElementById("bton")
$buton.addEventListener("click",() =>{
    console.log(boton);
})