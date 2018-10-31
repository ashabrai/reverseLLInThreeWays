'use strict';

module.exports = function reverseListTwo(linkList) {
 let currentNode = linkList.head;
 if(currentNode.next !==null){
     let helper = currentNode.next;
     helper.next = currentNode;
     currentNode = currentNode.next.next;
 }
 linkList.head = currentNode;
 return linkList;
};

