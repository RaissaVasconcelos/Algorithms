// src/binary_search.ts
function gerarNumerosAleatorios(n, min, max) {
  const listaAleatoria2 = [];
  for (let i = 0; i < n; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
    listaAleatoria2.push(numeroAleatorio);
  }
  return listaAleatoria2;
}
var listaAleatoria = gerarNumerosAleatorios(64, 1, 100);
console.log(listaAleatoria);
var orderList = listaAleatoria.sort();
console.log("lista ordenada", orderList);
