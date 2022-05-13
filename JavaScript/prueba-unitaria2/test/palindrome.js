//Importar

const { default: TestRunner } = require("jest-runner");
const { palindrome } = require("../para-probar");

/* const { exportAllDeclaration }= require("dbabel/tvpes"); */


//primer test unitario

test("palindrome de generation", () => {
  const resultado = palindrome("generation");

  //comparar
  expect(resultado).toBe("noitareneg");
});


//test 2
test("palindrome usando un string vacio", () => {
  const resultado = palindrome("");

  //comparar
  expect(resultado).toBe("");
});
// suma(1, 3) === 4;


//test 3
test("palindrome usando usando undefined", () => {
  const resultado = palindrome();

  //comparar
  expect(resultado).toBe();
});