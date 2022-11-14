/* 
Create Node class / factory, containing a value function and a link to the nextNode, set both as null by default.
*/
class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

/* 
Create LinkedList class / factory, which will represent the full list.
*/
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  //Build the following functions in your linked list class:
  //append(value) adds a new node containing value to the end of the list
  append(value) {
    let newNode = this.head;
    if (newNode == null) {
      this.head = value;
      return;
    }
    while (newNode.nextNode) {
      newNode = newNode.nextNode;
    }
    newNode.nextNode = value;
  }
  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    value.nextNode = this.head;
    this.head = value;
  }
  // size returns the total number of nodes in the list
  size() {
    let listSize = 0;
    let node = this.head;
    while (node) {
      listSize++;
      node = node.nextNode;
    }
    return listSize;
  }
  //getFirst returns the first node in the list
  getFirst() {
    return this.head;
  }
  //tail returns the last node in the list
  tail() {
    let node = this.head;
    if (node) {
      while (node.nextNode) {
        node = node.nextNode;
      }
    }
    return node;
  }
  //at(index) returns the node at the given index
  getAt(index) {
    let node = this.head;
    while (index--) {
      if (node.nextNode !== null) {
        node = node.nextNode;
      } else {
        node = 'Index not found';
      }
    }
    return node;
  }
  //pop removes the last element from the list
  pop() {
    if (!this.head) return;

    let current = this.head;
    let previous;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }
  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value == value) {
        return true;
      } else {
        node = node.nextNode;
      }
    }
    return false;
  }
  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let index = 0;
    let node = this.head;

    while (node) {
      if (node.value == value) {
        return index;
      } else {
        index++;
        node = node.nextNode;
      }
    }
    return null;
  }
  //toString represents your LinkedList objects as strings. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (!this.head) return null;
    let node = this.head;
    let result = '';
    while (node) {
      result = result.concat(`( ${node.value} ) --> `);
      node = node.nextNode;
    }
    result = result.concat(`null`);
    return result;
  }
  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    let node = this.head;
    if (index == 0) {
      value.nextNode = this.head;
      this.head = value;
      return;
    }

    while (--index) {
      if (node.nextNode) {
        node = node.nextNode;
      } else {
        console.log('Index cannot be reached');
        return;
      }
    }
    let temp = node.nextNode;
    node.nextNode = value;
    value.nextNode = temp;
  }
  //removeAt(index) that removes the node at the given index.
  removeAt(index) {
    let node = this.head;
    if (index == 0) {
      if (node) {
        node = node.nextNode;
        this.head = node;
        return;
      } else {
        console.log('Index cannot be reached');
        return;
      }
    }

    while (--index) {
      if (node.nextNode) {
        node = node.nextNode;
      } else {
        console.log('Index cannot be reached');
        return;
      }
    }
    node.nextNode = node.nextNode.nextNode;
  }
}

const myList = new LinkedList();

myList.append(new Node(11));
myList.append(new Node(12));
myList.append(new Node(13));
myList.prepend(new Node(99));
// console.log(myList);
// console.log(myList.size());
// console.log(myList.getFirst());
// console.log(myList.tail());
// console.log(myList.getAt(0));
// console.log(myList.getAt(2));
// console.log(myList.getAt(4));
// myList.pop();
// console.log(myList.contains(11));
// console.log(myList.contains(555));
// console.log(myList.find(11));
// console.log(myList.find(555));
myList.insertAt(new Node(7), 0);
myList.insertAt(new Node(2), 2);
myList.insertAt(new Node(9), 9);
console.log(myList.toString());
myList.removeAt(2);
myList.removeAt(0);
myList.removeAt(9);
console.log(myList.toString());
// console.log(myList);
