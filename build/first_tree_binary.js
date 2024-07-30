// src/first_tree_binary.ts
var TreeNode = class {
  tag;
  // arvores são estruturas de dados naturalmente recursivas, todos os nós compartilham a mesma interface
  left;
  right;
  constructor(tag) {
    this.tag = tag;
    this.left = null;
    this.right = null;
  }
};
var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(8);
root.left.right.left = new TreeNode(9);
root.left.right.right = new TreeNode(10);
root.right.left.left = new TreeNode(11);
root.right.left.right = new TreeNode(12);
root.right.right.left = new TreeNode(13);
root.right.right.right = new TreeNode(14);
console.log("root", root);
