class Node{
  constructor(value){
      this.value = value
      this.left = null
      this.right = null
  }
}

class BinarySearchTree{
  constructor(){
      this.root = null
  }
  insert(value){
      let newNode = new Node(value)
      if(this.root === null){
          this.root = newNode
          return this
      }
      let current = this.root
      while(true){
          if(current.value === value) return "already exit"
          else if(value< current.value){
              if(current.left === null){
                  current.left = newNode
                  return this
              }
              current = current.left
          }
          else{
              if(current.right === null){
                  current.right = newNode
                  return this
              }
              current  = current.right
          }
          
      }
  }

  contains(value){
      let current = this.root
      while(current){
          if(value < current.value) current = current.left
          else if(value > current.value) current = current.right
          else return true
      }
      return false
  }
}

const bst = new BinarySearchTree()
console.log(bst.insert(10));
bst.insert(4)
bst.insert(55)
bst.insert(1)
bst.insert(6)
bst.insert(6)
console.log(bst.contains(6))