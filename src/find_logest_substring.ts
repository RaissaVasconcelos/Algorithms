/*
* We have to find the longest substring of identical characters in a very long string.

  Let's see an example:

  s1 = "1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf"

  A substring mais longa em s1 é "aaaaaaaaaaaaaaaaaaaaaaaa" tendo comprimento 25, 
  composta pelo caractere "a", com seu código ascii correspondente igual a "97", 
  e tendo seu índice inicial 29 e final 53.

  Expressamos os resultados usando um array na seguinte ordem: ["97", 25, [29,53]]

  Os símbolos '!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~' que uma string pode ter serão considerados como ruído,
  portanto eles não pode ser uma solução mesmo que a substring, composta por uma delas,
  seja a mais longa de todas. Em outras palavras, os caracteres permitidos podem ser 
  letras maiúsculas ou minúsculas do alfabeto inglês ou dígitos decimais ('0123456789').

  https://www.codewars.com/kata/59167d51c63c18af32000055/train/javascript
*/



function findLogestSubstring(substring: string) {
  const allowedCaracteres = /[A-Za-z0-9]/
  let maxChar = ''
  let maxLength = 0 
  let maxRange: [number, number] = [0, 0] 
  
  let currentChar = ''
  let currentLength = 0
  let startIndex = 0

  for (let i = 0; i < substring.length; i++) {
    const char = substring[i]

    if (allowedCaracteres.test(char)) {
      if (char === currentChar) {
        currentLength++
      } else {
        if (currentLength > maxLength) {
          maxChar = currentChar
          maxLength = currentLength
          maxRange = [startIndex, i - 1]
        } 
        
        currentChar = char
        maxLength = currentLength
        startIndex = i
      } 
    } else {
      // reseta ao encontrar um caracter de ruido 
      if (currentLength > maxLength) {
        maxChar = currentChar
        maxLength = currentLength
        maxRange = [startIndex, i - 1]
      }

      currentChar = ''
      currentLength = 0
    }

  }

  return [maxChar.charCodeAt(0).toString(), maxLength, maxRange];
}

console.log(findLogestSubstring("1aaaaab"))