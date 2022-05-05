const urlultimos = "https://api.jikan.moe/v4/seasons/now"
const ultimosAnimes = document.getElementById("ultimosAnimes")

fetch(urlultimos).then(resp => resp.json()).then(datos => {
    /* console.log(datos.data); */

    const arregloAnimeUltimos = datos.data.slice(0,16)
    /* console.log(arregloAnimeUltimos); */

arregloAnimeUltimos.forEach((anime) => {

    /* Datos odtenidos de la API */
    const datosNecesarios = {
        nombre: anime.title,
        imagen: anime.images.jpg.image_url,
        id: anime.mal_id,
        sinopsis: anime.synopsis,
    }

    const template = `<div class="col mb-4">
                    <a href="informacion.html?id=${datosNecesarios.id}">
                        <div class="card">
                        <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${datosNecesarios.nombre}</h5>

                        </div>
                        </div>
                        </a>
                    </div>`

ultimosAnimes.innerHTML += template

    /* console.log(datosNecesarios); */

    })
})
