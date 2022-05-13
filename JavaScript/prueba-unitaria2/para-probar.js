const palindrome = (string) => {

    if (typeof string === (string === 'undefind') return);

    return string
        .split('')
        .reverse()
        .join('');
};

const average = array => {

let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
};


//exportar
    module.exports = {

    palindrome : palindrome, //si es el mismo nombre se puede omitir uno
    average: average
};