/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//because the leet code problem is really looking for one sorted list and not a linkedList 
//this one line is the solution.
const mergeTwoLists = (list1, list2) => [...list1,...list2].sort()
 


console.log(mergeTwoLists([],[]))