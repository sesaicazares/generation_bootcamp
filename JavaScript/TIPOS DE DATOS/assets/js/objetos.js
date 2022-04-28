const nombre = "Sesai"
const nombre2 = new String("Sesai 2")
console.log(nombre2);

const persona = new Object();
persona.nombre = "Sesai"
persona.apellido = "Cazares"
persona.edad = "25"

console.log(persona);

const nuevaPersona = {
    /* atributos a propiedades */
    nombreCompleto :{
    nombre: "Charles",
    apellido: "Lee",
    },
    edad: 35,
    pasatiempos: ["correr","bailar","ciclismo"],
    tieneTrabajo: true,
    /* metodo porque tiene una funcion (){}*/
    saludar: function (){
        console.log("Hola");
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1 + n2}`);
    }
}

"Hola".length /* atributo a propiedad */
"Hola".toLowerCase() /* metodo */

console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);

nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

/* Para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona);

/* Agregar nuevo atributo */
nuevaPersona.colorFavorito = "Rosa"
console.log(nuevaPersona.colorFavorito);

console.log(nuevaPersona.hasOwnProperty("edades"))

console.log(Object.keys(nuevaPersona));
console.log(Object.values(nuevaPersona));


const Sesai = {
    nombreCompleto :{
        nombre: "Sesai",
        apellido: "Cazares",
        },
        edad: 25,
        pasatiempos: ["fotografia","caminar","dibujar"],
    }