// APENAS UTILIZANDO O OBJETO     MATH
// pergunte para o usuario um numero
// e em seguida mostre a raiz quadrada dele,
// a e numero que ele digitou elevado
// ao quadrado.

let numero = parseInt(prompt('Digite um número:'))

let numeroRaiz = Math.sqrt(numero)
let numeroElevado = Math.pow(numero, 2)

document.write(
  `O seu número ${numero}. A raíz quadrada dele é ${numeroRaiz} <br>`
)
document.write(
  `O seu número ${numero}. Esse número elevado a 2 é ${numeroElevado}`
)
