/*
  This is a fundamental fundamental. Code up a breadth first traversal of a binary tree.
  The tree is built using Node objects with the following structure:
  You have to return an array containing the nodes' tags in the breadth-first order.
  your function should return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14] .
*/

class TreeNode {
  tag: number
  // arvores são estruturas de dados naturalmente recursivas, todos os nós compartilham a mesma interface
  left: TreeNode | null
  right: TreeNode | null

  constructor(tag: number) {
    this.tag = tag
    this.left = null
    this.right = null 
  }
}

/**
            0
           / \
          /   \
         /     \
        /       \
       1         2
     /  \      /   \
    3   4     5     6
   / \ / \   / \   / \
  7  8 9 10 11 12 13 14
*/


// construindo a arvore do exemplo
const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.left.left.left = new TreeNode(7)
root.left.left.right = new TreeNode(8)
root.left.right.left = new TreeNode(9)
root.left.right.right = new TreeNode(10)
root.right.left.left = new TreeNode(11)
root.right.left.right = new TreeNode(12)
root.right.right.left = new TreeNode(13)
root.right.right.right = new TreeNode(14)

console.log('root', root)

// Retornar este ponto amanhã e compreender melhor a função
function breadthFirstTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const current = queue.shift()!;
    result.push(current.tag);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
}