const formulario = document.querySelector("form")
/* console.log(formulario); */
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    /* console.log("boton presionado");  */

    const busqueda = document.querySelector("input").value
    /* console.log(busqueda); */
    
    window.location.href = `busqueda.html?nombre=${busqueda}`
})