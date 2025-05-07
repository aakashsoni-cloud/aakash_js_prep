class Node {
  constructor(data1, next1) {
    this.data = data1;
    this.next = next1;
  }
}

class LinkedList {
  createLinkedList(arr) {
    let head = new Node(arr[0], null);
    let mover = head;

    for (let i = 1; i < arr.length; i++) {
      let temp = new Node(arr[i], null);
      mover.next = temp;
      mover = temp;
    }

    return head;
  }

  printLinkedList(head) {
    let temp = head;
    let str = "";
    while (temp) {
      str += " " + temp.data;
      temp = temp.next;
    }
    console.log(str);
  }

  insertAtHead(head, ele) {
    let temp = new Node(ele, head);
    return temp;
  }

  insertAtLast(head, ele) {
    let newNode = new Node(ele, null);

    if (head == null) {
      return newNode;
    }

    let temp = head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;

    return head;
    a;
  }

  insertAtPosition(head, ele, k) {
    if (head == null) {
      if (k == 1) {
        let temp = new Node(ele, head);
        return temp;
      } else return null;
    }

    if (k == 1) {
      let temp = new Node(ele, head);
      return temp;
    }

    let temp = head;
    let count = 0;
    while (temp.next !== null) {
      count++;

      if (count == k - 1) {
        let newTemp = new Node(ele, temp.next);
        temp.next = newTemp;
        break;
      }
      temp = temp.next;
    }

    return head;
  }

  insertBeforeValue(head, ele, val) {
    if (head == null) {
      return null;
    }

    if (head.data == val) {
      let temp = new Node(ele, head);
      return temp;
    }

    let temp = head;
    while (temp.next !== null) {
      if (temp.next.data == val) {
        let newTemp = new Node(ele, temp.next);
        temp.next = newTemp;
        break;
      }
      temp = temp.next;
    }

    return head;
  }
}

let arr = [2, 3, 4, 1, 7];
let linkedList = new LinkedList();
let mainHead = linkedList.createLinkedList(arr);

console.log("Print Main LinkedList");
linkedList.printLinkedList(mainHead);

let insertAtHead = linkedList.insertAtHead(mainHead, 9);
console.log("Insert at head of LinkedList");
linkedList.printLinkedList(insertAtHead);

// https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1
let insertAtLast = linkedList.insertAtLast(insertAtHead, 5);
console.log("Insert at last of LinkedList");
linkedList.printLinkedList(insertAtLast);

let insertAtPosition = linkedList.insertAtPosition(insertAtHead, 8, 5);
console.log("Insert at position of LinkedList");
linkedList.printLinkedList(insertAtPosition);

let insertBeforeValue = linkedList.insertBeforeValue(insertAtHead, 100, 9);
console.log("Insert before value of LinkedList");
linkedList.printLinkedList(insertBeforeValue);
