function measureMemory(fn: Function, label: string, input: number[]) {
  const startMem = process.memoryUsage().heapUsed

  const result = fn(input)

  const endMem = process.memoryUsage().heapUsed
  const used = (endMem - startMem) / 1024 // KB

  console.log(`${label}: resultado=${result}, memória usada=${used.toFixed(2)} KB`)
}

const Sum = (list: number[]): number => {
  let total = 0
  if (!list.length) return 0
  
  for (let item of list) {
    total += item
  }

  return total
}

// converter essa função usando recursiva
// observaçoes, usando recursividade para listas grandes provavelmente
// vai dar erro de stack overflow, pilha de chamada tem 3MB em computadores de 64bits 

const SumRecursive = (list: number[]): number => {
  if (!list.length) return 0

  return list[0] + SumRecursive(list.slice(1, list.length))
}

console.log('Sum', measureMemory(Sum, 'interativo', [2, 5, 9, 4]))
console.log('Sum recursiva', measureMemory(SumRecursive, 'recursiva', ([2, 5, 9, 4])))