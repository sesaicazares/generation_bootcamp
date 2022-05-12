const palindrome = (string) => {

    return string
        .split("")
        .reverse()
        .join("");
}

const average = array => {
    let sum = 0;
    array.forEarch(num => { sum += num});
    return sum / array.length;
}