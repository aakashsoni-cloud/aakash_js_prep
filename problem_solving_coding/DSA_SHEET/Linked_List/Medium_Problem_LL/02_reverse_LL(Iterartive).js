var reverseListBrute = function (head) {
    if (head == null || head.next == null) return head;

    let temp = head;
    let stack = [];

    while (temp !== null) {
        stack.push(temp.data);
        temp = temp.next;
    }

    temp = head;
    while (temp !== null) {
        temp.data = stack.pop();
        temp = temp.next;
    }

    return head;
}


var reverseListOptimized = function (head) {
  if (head == null || head.next == null) return head;

  let temp = head;

  let prev = null;

  while (temp !== null) {
    let front = temp.next;

    temp.next = prev;

    prev = temp;

    temp = front;
  }

  return prev;
};
