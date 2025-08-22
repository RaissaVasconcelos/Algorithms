
const vendas = [
  { id: 1, nome: 'Caneta', quantidade: 3 },
  { id: 2, nome: 'Lápis', quantidade: 2 },
  { id: 1, nome: 'Caneta', quantidade: 5 },
  { id: 3, nome: 'Caderno', quantidade: 1 },
  { id: 2, nome: 'Lápis', quantidade: 4 }
];

interface input {
  id: number
  nome: string
  quantidade: number
}

const formatedOutput = (inputValue: input[]) => {
  const map = new Map()

  for (const i of inputValue) {
    if (map.has(i.id)) {
      const hasExisting = map.get(i.id)
      hasExisting.quantidade += i.quantidade
    } else {
      map.set(i.id, { ...i })
    }
  }
  console.log('array', Array.from(map.values()))
  return Array.from(map.values())
}

console.log(formatedOutput(vendas))