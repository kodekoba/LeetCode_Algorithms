/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
    // given that linked list will have at least two elements
    // given that desired node will not be last element
    let prev = node
    let runner = node.next
    
    // if you desire to delete the first node 
    if (prev.val === node.val) {
        prev.next = null
        return
    }
    
    while (runner) {
        console.log(runner)
        if (runner.val === node.val) {
            prev.next = runner.next
            runner.next = null
            return
        }
        prev = prev.next
        runner = runner.next
    }
    return
};
