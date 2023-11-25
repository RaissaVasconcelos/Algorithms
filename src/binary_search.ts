/* 
  ALGORITMO BYNARY SEARCH  

  Lembrando que o algoritmo de busca binaria só funciona quando a lista de busca está ordenada

  A busca binária consiste em diminuir o numero de etapas na busca em ordem na escala logaritma,
  confuso? vou dar um exemplo, se uma lista possui 8 elementos, e o objetivo do problema é
  encontrar o valor 7, pode-se seguir o seguinte procedimento, ordenando essa lista
  e descobrindo o valor do numero que ocupa a posição da media dessa lista,
  se este valor por exemplo for 4, sabemos que se o numero 7 existir nessa lista, ele estárá
  na segunda metade acima do medio valor da lista, então fazendo o mesmo procedimento com metade
  superior do array, encontramos o valor que ocupa a media dessa nova lista e verificamos
  se este valor encontrado nesta posição é > ou < ou = 7, o numero encontrado foi 6,
  então é descartado a posição inferior ao 6, logo a unica posição que possivelmente o 7
  pode está ocupando é a posição acima do 6.

  Seguindo este metodo de busca binária o numero de tentativas para encontrar o
  numero 7 na lista foram de 3 tentativas.
  Que curiosamente é o valor do resultado de log8 = 3   

*/



/* Encontrar um valor, caso existe em uma lista de n numeros */

function generateRandomNumber(n: number, min: number, max: number): number[] {
  const randomList: number[] = [];
  for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      randomList.push(randomNumber);
  }
  return randomList;
}

const randomList: number[] = generateRandomNumber(20, 1, 100);


// ordena a lista
const randomListOrder: number[] = randomList.sort((a, b) => a - b)
console.log('lista ordenada', randomListOrder)


function getNumberList(number: number, list: number[]) {
  let high = list.length - 1
  let low = 0
  
  while (high >= low) {
    let count = 0
    console.log(count)
    // arredonda o numero para cima, se necessário
    let medium = Math.ceil((low + high) / 2)
    let guess = list[medium]

    if(guess === number) {
      console.log(`Encontrei o numero: ${guess}`)
      return guess
    }

    else if(guess > number) {
      high = medium - 1
     
    } else {
      low = medium + 1
    }

    count += 1
  }

  return null
}


console.log(getNumberList(20, randomListOrder))