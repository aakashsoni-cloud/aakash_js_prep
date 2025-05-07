class Node {
  constructor(data1, next1, prev1) {
    this.data = data1;
    this.next = next1;
    this.prev = prev1;
  }
}

class DoublyLinkedList {
  arrayToDoubleLinkedList(arr) {
    let head = new Node(arr[0], null, null);

    let mover = head;

    for (let i = 1; i <= arr.length; i++) {
      let newNode = new Node(arr[i], null, mover);
      mover.next = newNode;
      mover = newNode;
    }

    return head;
  }

  printDoubleLinkedList(head) {
    let temp = head;
    let str = "";

    while (temp.next !== null) {
      str += " " + temp.data;
      temp = temp.next;
    }

    console.log(str);
  }
}

let doublyLinkedList = new DoublyLinkedList();

let arr = [2, 3, 1, 4];
let head = doublyLinkedList.arrayToDoubleLinkedList(arr);
doublyLinkedList.printDoubleLinkedList(head);
