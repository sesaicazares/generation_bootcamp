/* let tiempo = 5000
let datos

setTimeout(()=>{
    let datos = "Sesai"
    console.log("datos");
},tiempo)

console.log(datos);

console.log("Hola"); */


const datos = [
    {
        nombre: "Sesai",
        edad: 25,
    },
    {
        nombre: "Bruce",
        edad: 38,
    },{
        nombre: "Leo",
        edad: 18,
    },
]

function obtenerDatos(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve (datos)
        },3000)
    })
}

/* console.log(obtenerDatos()); */

/* obtenerDatos().then( (datos) =>{
    console.log(datos);
}) */

async function obtenerDatosAsync (){
    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
}

obtenerDatos()