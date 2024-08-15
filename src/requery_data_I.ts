/*
* [(1), (2), (3), [[(4)], 5]]

(1) - Total de numeros inteiros.

(2) - Total quantidade de valores diferentes no array.

(3) - Total de quantidade de valores que ocorrem apenas uma vez no array.

(4) and (5) ambos em um lista

(4) - É (ou são) o(s) elemento(s) que tem (ou tem) ocorrência máxima.
      Se houver mais de um, os elementos devem ser classificados (pelo seu valor, obviamente)

(5) - Ocorrencia máxina dos inteiros

example

for list [-3, -2, -1, 3, 4, -5, -5, 5, -1, -5] ----> [10, 7, 5, [[-5], 3]]

(1) - The list has ten elements (10 numbers)

(2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

(3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

(4) and (5) - The number -5 occurs three times (3 occurrences)

for list [4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5] ----> [14, 8, 4, [[2, 4], 3]]

*/

type Value = { value: string, count: number }

function formatedOutput(array: string[], hashmap: any): any[] {
  const quantity = array.length
  const diferentValues = Object.keys(hashmap).length
  const repeatOneValues: number[] = []
  const occurrenceMax: number[] = []
  let count = 0
  
  for (const key of Object.keys(hashmap)) {
    const numberOccurrency = hashmap[key]
    
    if (hashmap[key] === 1) {
      repeatOneValues.push(Number(key))
    }

    if (numberOccurrency > count) {
      count = numberOccurrency
      occurrenceMax.length = 0 // limpa a lista
      occurrenceMax.push(Number(key))
    } else if (numberOccurrency === count) {
      occurrenceMax.push(Number(key))
    }
  }
  
  occurrenceMax.sort((a, b) => a - b)
  
  return [quantity, diferentValues, repeatOneValues.length, [ occurrenceMax, count ]]
}

const countSel = (array: string[]): string[] => {
  const hashmap: Record<string, number> = {}
  
  for (const number of array) {
    // || verifica se o valor da direita é falsy se for retorna 0, se não retorna 1
    hashmap[number] = (hashmap[number] || 0) + 1 
  }

  return formatedOutput(array, hashmap)
}

console.log(countSel(['4', '4', '2', '-3', '1', '4', '3', '2', '0', '-5', '2', '-2', '-2', '-5']))