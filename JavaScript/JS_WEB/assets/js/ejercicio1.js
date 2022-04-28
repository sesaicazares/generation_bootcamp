window.addEventListener('keypress', registro)

const $parrafo = document.getElementById('par')
document.getElementById('reset').addEventListener('click', () => {
    $parrafo.textContent = '';
    
    console.clear()
})


var lista = document.getElementById('lista');
function registro(e) {
    console.log(e.key,e.keyCode,e.code)
    $parrafo.textContent += e.key + '  ' + e.keyCode + '  ' + e.code + '          ';
    let item = document.createElement('li');
    item.innerText = `key: ${e.key}     keyCode: ${e.keyCode}     code: ${e.code}`;
    lista.appendChild(item);
}