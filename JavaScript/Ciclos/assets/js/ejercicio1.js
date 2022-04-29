//Ejercicio 1

//Escribe un ciclo que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.

/* let xValue=5
for(let i=xValue; i>0; i-=0.5){
    document.write(i+"<br>")
} 
  */

//Ejercicio 2
//Imprime todos los números impares entre 1 y 100

const numero=prompt("Escribe un numero");
console.log(numero);
const num=parseInt(numero)
console.log(typeof(num));


for (let i=num;  i>=0;i-=0.5) {
    console.log(i);
} 

 for (let i = 1; i <=100; i++) {
   if(i%2!=0){
       console.log(i);
   }
    
} 
 const nu=prompt("Escribe un numero");
const n=parseInt(nu);
let i=1;
while (i<=n) {
    console.log(`[${i}]`);
    i++;
    
} 
let suma=0;
const n=5;
for (let i = 1; i <=n; i++) {

    suma=suma+i;
}
console.log(suma);


//Ejercicio 3
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

/*  const numIn=new Number(prompt("Ingrese un numero"))
let contador=1
while(contador <=numIn){
    document.write("["+contador+"]")
    contador ++
} 
 */


//Ejercicio 4
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 + 5 )

/* let numIn = new Number(prompt("Ingresar un numero"))
for(let numIn=1; numIn>0; numIn--){
    document.write(i+"<br>")
    let arrays = numIn.push(numIn)
    console.log(arrays)
} */

const sam = () => {
    let numIn = new Number(prompt("Ingrese un número"));
    const res = [];
    let total = 0;
    for (numIn ; numIn>0 ; numIn--) {
        res.push(numIn)
        total += numIn;
      }
      document.write(res.length + "<hr>")
      document.write(total + " = " + res.join(' + ') +"<hr>")
      // document.write(total + "<hr>")
  }
  
  sam()

