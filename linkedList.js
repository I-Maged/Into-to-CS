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
      //if list is empty
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
}

const myList = new LinkedList();

myList.append(new Node(11));
myList.append(new Node(12));
myList.append(new Node(13));
myList.prepend(new Node(99));
console.log(myList);
console.log(myList.size());
