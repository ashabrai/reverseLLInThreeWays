'use strict';

const Stack = require('./stack');

module.exports = function reverseListThree(LinkedList) {
  const stack = new Stack();
  let currentNode = LinkedList.head;
  while (currentNode.next !== null) {
    stack.push(currentNode.value);
    currentNode = currentNode.next;
  }
  const newList = new LinkedList(stack.pop());
  while (!stack.isEmpty()) {
    newList.append(stack.pop());
  }
  return newList;
};
