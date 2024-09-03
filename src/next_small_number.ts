/*
* Requisitos do Desafio:
Dígitos Idênticos em Ordem Diferente:

Você precisa reorganizar os dígitos do número dado para criar o número positivo mais próximo que seja menor do que o número original.
Por exemplo, se você receber o número 21, o próximo número menor usando os mesmos dígitos é 12.
Restrições:

Se não houver um número menor possível utilizando os mesmos dígitos, a função deve retornar -1.
Exemplo: para o número 9, não há um número menor que também utilize o dígito 9. Portanto, deve retornar -1.
Para o número 111, todos os números possíveis (como 111) são iguais ao número original, então a resposta é -1.
Evitar Números com Zeros à Esquerda:

A função deve evitar números que teriam zeros à esquerda, pois eles não são considerados como números válidos.
Exemplo: 1027 -> a reordenação para obter o próximo número menor seria 0721, mas como números com zeros à esquerda não são válidos, deve retornar -1.
Casos Importantes:
Sem Número Menor: Se o número dado já é o menor possível com os seus dígitos, como 135, onde não há uma forma de reorganizar os dígitos para obter um número menor, a função deve retornar -1.

Números Grandes: A função deve lidar com números grandes eficientemente, então o algoritmo deve ser otimizado para evitar cálculos desnecessários.

Exemplo Explicado:
Para o número 531:

Os dígitos são 5, 3, 1.
O próximo menor número que pode ser formado usando esses dígitos é 513.
Para o número 2071:

Os dígitos são 2, 0, 7, 1.
O próximo menor número é 2017 (e não 1720, pois começaria com um zero).
*/

// precisa ordenar da seguinte forma, fixa o primeiro numero, e modifica os ultimos numeros e verifica se tem posição menor
// tiver um numero só retorna -1

// estudar amanhã
//https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

// 907 => 709 (troca) depois é ordenado -> 790

// para i[1] = 0 -- 0 > 7 (não)
// para i[0] = 9 -- 9 > 0 (sim) este é o ponto de troca

// para j[1] = 0 -- 0

function nextSmaller(n) {
  const arrayNumbers = String(n).split("").map(Number);
  let len = arrayNumbers.length;

  for (let i = len - 2; i >= 0; i--) {
    if (arrayNumbers[i] > arrayNumbers[i + 1]) {
      // ponto de troca
      let maxIndex = i + 1;

      for (let j = i + 1; j < len; j++) {
        // vai verificar exatamente com qual numero trocar do array
        if (arrayNumbers[j] < arrayNumbers[i]) {
          maxIndex = j;
        }
      }
      [arrayNumbers[i], arrayNumbers[maxIndex]] = [arrayNumbers[maxIndex], arrayNumbers[i]];

      const resultArray = [
        ...arrayNumbers.slice(0, i + 1),
        ...arrayNumbers.slice(i + 1).sort((a, b) => b - a)
      ];

      const result = Number(resultArray.join(''));
      
      return result < n && resultArray[0] !== 0 ? result : -1;
    }
  }

  return -1;
}



console.log(nextSmaller(907))
