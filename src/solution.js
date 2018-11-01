'use strict';

const LinkedList = require('../src/linked-list');

module.exports = function reverseList(linkedList) {
  let currentNode = linkedList.head;
  const array = [];
  while (currentNode.next !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  const newList = new LinkedList(array.pop());
  while (array.length !== 0) {
    newList.append(array.pop());
  }
  return newList;
};
