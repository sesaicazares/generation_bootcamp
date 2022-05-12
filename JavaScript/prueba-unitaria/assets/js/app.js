const suma = (a, b) => {
    return a - b;
}

/*console log((suma(1,3) === 4));
console.log((suma (0,0) === 0));
console.log((suma(5,5) === 10));*/

const arre = [
    {a:1, b:3, resultado:4},
    {a:0, b:0, resultado:0},
    {a:5, b:5, resultado:10},
    {a:10, b:30, resultado:40},
]

arre.forEach(prueba =>{
    const { a, b, resultado} = prueba; //destruccion
    console.assert(suma(a,b)) === resultado, "Suma de ${a} y ${b} deberia ser $ {resultado}";
});
