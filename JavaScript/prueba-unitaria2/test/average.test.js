const { average } = require("../para-probar");

describe("average", () => {

/* test("ingresar un solo valor', () => {
    const resultado = average(1);
    
    expect(resultado).toBe(1)); */

test("ingresar un solo valor", () => {
    expect(average([1])).toBe(1);
});

test("usando múltiples valores", () => {
    expect(average([1, 2, 3,4, 5, 6])).toBe(3.5);
});
    
 test("usando undefined", () => {
 expect(average()).toBeUndefined();
});

//crear un test para probar
//expect(average()).toBe();

/* const average = (array) => {
	if (typeof array === 'undefined') return;
	let sum = 0;
	array.forEach((num) => {
		sum += num;
	});
	return sum / array.length;
 }; */
});
