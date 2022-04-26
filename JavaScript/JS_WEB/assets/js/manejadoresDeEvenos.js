
addEventListener('load', function(){
    this.alert('Se ha terminado de cargar la pagina');

});

function saludar(){
    alert("Hola");
}

/* Manejador de evento semantico */
const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function (evento){
    /* alert("hola desde un manejador semantico") */
    console.log(evento.target);
}

/* Manejador de evento múltiple */
const $botonMultiple = document.getElementById('evento-multiple');

$botonMultiple.addEventListener('click', saludarMultiple);

$botonMultiple.addEventListener('click', function(e){
    console.log(e.target);
});


function saludarMultiple(){
    alert('Hola desde evento multiple');
}
