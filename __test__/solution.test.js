// 'use strict';
//
// const LinkedList = require('../src/linked-list');
//
//
// const reverseLinkedOne = require('../src/solution');
// const reverseLinkedTwo = require('../src/solutionTwo');
//
//
// const testList = new LinkedList();
// // const emptyList = new LinkedList();
//
// //
// // describe('#threeReversedLinkedLists', () => {
// //   test('Testing Test List Values', () => {
// //     expect(testList.head.value).toEqual('Value 1');
// //     expect(testList.head.next.value).toEqual('Value 2');
// //     expect(testList.head.next.next.value).toEqual('Value 3');
// //     expect(testList.head.next.next.next.value).toEqual('Value 4');
// //     expect(testList.head.next.next.next.next.value).toEqual('Value 5');
// //   });
// describe('testing three different reverse linked list methods', () => {
//   test('Testing Method One', () => {
//     const reversedList = reverseLinkedOne(testList);
//     expect(reversedList.head.value.value).toEqual('Value 5');
//     expect(reversedList.head.next.value.value).toEqual('Value 4');
//     expect(reversedList.head.next.next.value.value).toEqual('Value 3');
//     expect(reversedList.head.next.next.next.value.value).toEqual('Value 2');
//     expect(reversedList.head.next.next.next.next.value.value).toEqual('Value 1');
//   });
//   test('Testing Method Two', () => {
//     const reversedList = reverseLinkedTwo(testList);
//     expect(reversedList.head.value).toEqual('Value 5');
//     expect(reversedList.head.next.value).toEqual('Value 4');
//     expect(reversedList.head.next.next.value).toEqual('Value 3');
//     expect(reversedList.head.next.next.next.value).toEqual('Value 2');
//     expect(reversedList.head.next.next.next.next.value).toEqual('Value 1');
//   });
// });
