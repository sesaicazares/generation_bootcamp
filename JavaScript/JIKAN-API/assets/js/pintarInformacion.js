const idInfo = window.location.href.split("=").pop()
console.log(idInfo);

const imagenPortada = document.getElementById("imagenPortada");
const informacionAnime = document.getElementById("informacionAnime");

const urlID = `https://api.jikan.moe/v4/anime/${idInfo}`

fetch(urlID).then(resp => resp.json()).then(datos =>{
    /* console.log(datos.data); */

    const datosNecesarios = {
        id: datos.data.mal_id,
        imagen: datos.data.images.jpg.large_image_url,
        sinopsis: datos.data.synopsis,
        nombre: datos.data.title
    }


    /* Insertar imagen */
    const templateImg = `<img src="${datosNecesarios.imagen}" class="imag-fluid">`
    
    imagenPortada.innerHTML = templateImg

    /* Insertar la informacion */
    const templateInfo = `<h1>${datosNecesarios.nombre}</h1>
                         <p>${datosNecesarios.sinopsis}</p>
                         <div class="favorito">
                        <button id="agregarFav" type="button" class="btn btn-dark">Agregar a favoritos</button>
                        </div>`
    
    informacionAnime.innerHTML = templateInfo
    
    /* console.log(datosNecesarios); */

    const agregarFav = document.getElementById("agregarFav")
    console.log(agregarFav);

    agregarFav.addEventListener("click",() => {
        /* console.log("Agregado"); */
        const datos = {
            id: datosNecesarios.id,
            nombre: datosNecesarios.nombre,
            imagen: datosNecesarios.imagen
        }

        if(localStorage.getItem("favoritos")){
            console.log("Existe un elemento");
            const favoritos = JSON.parse(localStorage.getItem("favoritos"));
            favoritos.push(datos)

            datosGuardados = datosGuardados.filter((el) => el.nombre != datos.nombre)
            datosGuardados.push(datos)

            localStorage.setItem("favoritos",JSON.stringify(favoritos))

            
        }
        else{
            console.log("No tienes favoritos");
            const favoritos = []
            favoritos.push(datos)

            localStorage.setItem("favoritos",JSON.stringify(favoritos))
        }

       /* JSON.parce(localStorage.getItem("favoritos"));

        localStorage.setItem("favoritos",JSON.stringify(favoritos))  */

        /* console.log(datos); */



    })
})