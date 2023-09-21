class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) return "already exit";
      else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }

  BFS() {
    let current = this.root;
    let queue = [current];
    let visited = [];

    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  //   DFS
  preOrder() {
    let visited = [];
    function helper(node) {
      visited.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return visited;
  }

  postOrder() {
    let visited = [];
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.value);
    }
    helper(this.root);
    return visited;
  }
  inOrder() {
    let result = [];
    function helper(node) {
      if (node.left) helper(node.left);
      result.push(node.value);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return result;
  }

  min(node) {
    if (node.left == null) return node.valuee;
    else this.min(node.left);
  }

  max(node){
    if(node.right === null) return node.value
    else return node.right
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;
    if (value < root.value) root.left = this.deleteNode(root.left, value);
    else if (value > root.value)
      root.right = this.deleteNode(root.right, value);
    else {
      if (!root.left && root.right) return null;
      if (!root.left) return root.right;
      else if (!root.right) return root.right;
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  validation(node,minValue = -Infinity,maxValue = Infinity){
    if(node  == null) return true
    if(node.value >= maxValue || node.value <= minValue) return false
    return this.validation(root.left,minValue,root.value) && this.validation(root.right,root.value,maxValue)
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(1);

bst.insert(15);
bst.insert(20);
// console.log(bst.postOrder());
console.log(bst.validation());
