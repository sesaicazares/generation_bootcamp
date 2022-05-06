const url = "https://dog.ceo/api/breeds/image/random"
const imagen = document.getElementById("imagenPerrito")
const imagen2 = document.getElementById("imagenPerrito2")

fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    console.log(datos);
    imagen.src = datos.message
})

async function obtenerPerrito(){
    const infoPerritos = await fetch(url)
    /* console.log(obtenerPerrito); */
    const perrito = await infoPerritos.json()
    console.log(perrito);
    imagen2.src = perrito.message
}

obtenerPerrito()