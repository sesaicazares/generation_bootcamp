const invertir = (word) => {
    if (word.length < 1) return console.warn('No ingresaste texto');
    if(typeof (word) !== 'string') return console.error('No es una palabra');
  
    var res = [];
    for (let i = word.length - 1; i >= 0; i--) {
      res.push(word[i]);
    }
    console.log(res.join(""));
  };
  // const palabra = prompt("Escribe una palabra");
  
  invertir(123);