class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  //this method adds to the end of the linkedList
  add(element) {
    //create a new node w given element
    let newNode = new Node(element);
    //a place keeper
    let current;
    //if list is empty
    if (this.head === null) this.head = newNode
      //if list has head...
    else {
      //assign the place keeper to head
      current = this.head
      //if the node.next points to another node
      while (current.next) {
        //move  placekeeperforward to assign it the value of the next node
        //then repeat the step above
        current = current.next;
      }
      //after the while loop finds the last node
      //(current.next  === null) assign the value of that nodes next to be the newNode
      current.next = newNode;
    }
    this.size++;
  };
  
};

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node('hello')
node1.next = node2

let list = new LinkedList(node1);
LinkedList.add(node3)

console.log(list.head.next.data)
