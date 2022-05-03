const $padre = document.querySelector(".padre");

//getElementById
/* 
#llamar un id
.llamar una clase
 */
//crear un elemento nuevo

//la forma mas correcta
const $parr = document.createElement("p");
$parr.textContent = ("Lorem ipsum");
$parr.textContent += ("Lorem ipsum");
$parr.textContent += ("Lorem ipsum");

$padre.appendChild($parr);


//Agregar elementoss con innerHTML

const $cuadro = document.querySelector(".cuadro");
$cuadro.innerHTML = ""; //inicializar el contenido del elemnto

$cuadro.innerHTML =`
                    <a href=#>Este es un enlace</a>
                    <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                    </ol>
                    `;



const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

const $lista = document.createElement("ul");

estaciones.forEach( elemento => {
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $lista.appendChild($li);
});

/* $cuadro.appendChild($lista); */
document.body.appendChild($lista)




// Language: javascript
//////////////////////////////////////
const continente = ["África", "América", "Asia", "Europa", "Oceanía"];

const $ol = document.createElement("ol");
$cuadro.appendChild($ol);

continente.forEach(continente =>{$ol.innerHTML += `<li>${continente}</li>`})