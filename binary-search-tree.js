class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (current) {
      if (current.val > val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        else{
          current = current.left;
        }

      }
      else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        else{
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode; 
      return this; 
    }
    const tree = this; 

    return _insertRecursively(this.root); 
    function _insertRecursively(node){
      if(node.val > val){
        if(!node.left){
          node.left = newNode; 
          return tree; 
        }
        else return _insertRecursively(node.left);
      }
      else{
        if(!node.right){
          node.right = newNode; 
          return tree; 
        }
        else{
          return _insertRecursively(node.right);
        }
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root){
      return undefined; 
    }

    let current = this.root; 
    while(current){
      if(current.val === val){
        return current; 
      }
      else if(current.val > val){
        current = current.left; 
      }
      else{
        current = current.right; 
      }
    }
    return undefined; 
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(!this.root){
      return undefined; 
    }

    return _findRecursively(this.root); 
    function _findRecursively(current){
      if(current.val === val){
        return current;
      }
      else if(current.val > val){
        if(!current.left){
          return undefined;
        }
        return _findRecursively(current.left); 
      }
      else{
        if(!current.right){
          return undefined;
        }
        return _findRecursively(current.right);
      }
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let traversal = [];
    if(!this.root){
      return []; 
    }

    return _dfsPreOrder(this.root);
    function _dfsPreOrder(current){
      traversal.push(current.val); 
      if(current.left){
        _dfsPreOrder(current.left); 
      }
      if(current.right){
        _dfsPreOrder(current.right);
      }
      return traversal; 
    }
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let traversal = [];
    if(!this.root){
      return traversal; 
    }

    return _dfsInorder(this.root); 
    function _dfsInorder(current){
      if(current.left){
        _dfsInorder(current.left);
      }

      traversal.push(current.val);

      if(current.right){
        _dfsInorder(current.right);
      }

      return traversal;
    }
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const traversal = []; 
    if(!this.root){
      return traversal; 
    }

    return _dfsPostOrder(this.root);

    function _dfsPostOrder(current){
      if(current.left){
        _dfsPostOrder(current.left);
      }
      if(current.right){
        _dfsPostOrder(current.right);
      }
      traversal.push(current.val); 
      return traversal;
    }
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let traversal = []; 
    let queue = [];
    if(!this.root){
      return traversal; 
    }
    
    queue.push(this.root);
    while(queue.length > 0){
      let current = queue.shift(); 
      traversal.push(current.val); 
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
    }
    return traversal;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
