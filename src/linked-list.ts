/*
*
Dado o cabeçalho, o cabeçalho de uma lista vinculada, determine se a lista vinculada contém um ciclo.
Existe um ciclo em uma lista vinculada se houver algum nó na lista que possa ser alcançado novamente seguindo continuamente o próximo ponteiro. Internamente, pos é usado para denotar o índice do nó ao qual o próximo ponteiro da cauda está conectado. Observe que pos não é passado como parâmetro.
Retorne verdadeiro se houver um ciclo na lista vinculada. Caso contrário, retorne falso.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const head = new ListNode(3)
const nodeTwo = new ListNode(2)
const nodeThree = new ListNode(0)
const nodeFour = new ListNode(-4)

head.next = nodeTwo
nodeTwo.next = nodeThree
nodeThree.next = nodeFour
nodeFour.next = nodeTwo

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false
  }

  // ponteiro lento e ponteiro rapido
  let slow = head
  let fast = head


  while (fast && fast.next) {
    slow = slow.next //avança sempre um passo
    fast = fast.next.next //avança sempre dois

    if (slow === fast) {
      return true
    }
  }

  return false
}

console.log(hasCycle(head))