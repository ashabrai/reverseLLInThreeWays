'use strict';

module.exports= function reverseListThree(LinkedList){
    let stack = new Stack();
    let currentNode = linkedList.head;
    while(currentNode.next !==null){
        stack.push(currentNode.value);
        currentNode = currentNode.next;
    }
    let newList = new LinkedList(stack.pop());
    while(!stack.isEmpty()){
        newList.append(stack.pop());
    }
    return newList;
};
