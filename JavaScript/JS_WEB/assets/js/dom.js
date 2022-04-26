/* Algunas cosas que podenmos hacen con DOM */
console.log(window.document);
console.log(document);
console.log(document.head); //regresa a el head del documento
console.log(document.body); //regresa el body
console.log(document.documentElement); //regresa todo el html
console.log(document.doctype);
console.log(document.charset);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets); //regresa los css
console.log(document.scripts);//regresa las etiquetas script

setTimeout(()=> {
console.log(document.getSelection().toString());
}, 3000);

document.write("Hola mundo desde document write");
document.write("<h2> Hola mundo desde document write</h2>");