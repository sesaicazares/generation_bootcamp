const Jonathan = {
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"]
}

const Abi = {
    nombreCompleto:{
        nombre: "Abigail",
        apellido: "Moreno"
    }, 
    edad: 23, 
    pasatiempos: ["bailar", "plantas", "fotografía"], 
}

const Miriam = {
    nombreCompleto:{ 
    nombre: "Aketzali",
    apellido: "Gonzalez" 
},
    edad: 23,
    pasatiempos: ["pintar","leer","escribir"],
}

const Luis = {
    nombreCompleto: {
      nombre: "Luis",
      apellido: "García",
    },
    edad: 23,
    pasatiempos: ["series", "ejercicio", "dormir"],
  };

  const cohorte12 = [Jonathan,Abi,Miriam,Luis]
 

  for(let i=0; i<cohorte12.length; i++){
      if(cohorte12[i].pasatiempos.includes("bailar")){
          console.log(cohorte12[i].nombreCompleto.nombre)
      }
}