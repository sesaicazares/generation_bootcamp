/* este es nodo de comentario */
const $titulo = document.querySelector("h1");
const $parr = document.querySelector("p");
const $card = document.querySelector(".card");

//nodeName
console.log($parr.nodeName);
console.log($titulo.nodeName);

//textContent
console.log($parr.textContent);
$parr.textContent += "Hola mundo!"

$titulo.textContent = "Modificando elementos con JavaScript"

//innerText - mejor no usarla

//innerHTML

console.log($parr.innerHTML);

$parr.innerHTML = '<a href="#">Este es un enlace</a>'
//reemplaza lo que hay adentro del elemento seleccionado

//outerHTML

//$parr.outerHTML = '<a href="#">"Este es un enlace"</a>'
//reempla todo, incluido el elemento que seleccionamos

//Crear elementos de html

console.log(document);

function crearElemento(){
    const img = document.createElement("img");
    img.src = "https://images.wikidexcdn.net/mwuploads/wikidex/a/ad/latest/20211225033009/EP1181_Gengar_de_Ash.png"


    //appendChild
    $card.appendChild(img);
}



crearElemento();