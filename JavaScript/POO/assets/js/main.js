class Persona{
    //atributo
    #id = 0;
    static #contador = 0;
    #nombre = ""; //variableprivada
    edad = 0;
    correo = "";

    constructor(nombre, edad , correo){
        this.#nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.#id = ++Persona.#contador;

    } 

    //Setters & getters
    //set & get
    //fijar & obtener
    //se usan y se llaman como si fueran atributos
    //se usan parametros
    get getNombre(){
        return this.#nombre
    }

    set setNombre(nombre){
        this.#nombre = nombre;

    } 

    //métodos

    cambiarNombre(nombre){
        this.#nombre = nombre;
    }



    #saludar(){
        let mensaje = `Hola mi nombre es ${this.#nombre}`;
        return mensaje;
    }

    mostrarSaludo(){
        return this.#saludar();
    }

    static mostrarContador(){
        return Persona.#contador;
    }

}

//instancia de la clase persona
const persona1 = new  Persona("Pedro", 30, "pedro30@icloud.com");
const persona2 = new  Persona("Gabriel", 25, "gabriel25@icloud.com");
const persona3 = new  Persona("Fran", 43, "fran43@icloud.com");

persona1.setNombre = "Jose"

/* persona1.cambiarNombre("Antonio") */

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());

/* console.log(Persona.contador); */

console.log(Persona.mostrarContador());
