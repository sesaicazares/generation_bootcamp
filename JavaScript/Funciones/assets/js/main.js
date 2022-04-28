// funciones, nos permiten reutilizar código

function greeting(nombre = "Sesai", apellido = "") {
    console.log("Hola, mi nombre es", nombre, apellido);
    // console.log(`Hola mi nombre es ${name}`);
    console.log(`Hola, mi nombre es ${nombre ? "Sesai" : "desconocido"}`);
  }
  
  greeting((apellido = "Cazares"));
  
  /* Función declarada */
  function suma(a, b) {
    return a + b;
  }
  
  console.log(suma(10, 20));
  
  /* Funciones expresadas | función expresión*/
  
  const resta = function (a, b) {
    return a - b;
  };
  
  console.log(resta(10, 40));
  
  const multiplicacion = (a, b) => {
    return a*b;
  };
  /* const multiplicacion = (a,b) => a*b | Es otra manera de utilizar las flecha sin return*/
  console.log(multiplicacion(5, 4));
  
  