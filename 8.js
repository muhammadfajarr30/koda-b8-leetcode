/**
 977. Squares of a Sorted Array

 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0
    let r  = nums.length -1
    const result = new Array (nums.length)
        let index = nums.length -1
    while (l <= r) {
        let leftSquare = nums[l] ** 2
        let rightSquare = nums[r] ** 2
        if (leftSquare > rightSquare) {
            result[index] = leftSquare
            l++

        } else {

            result[index] = rightSquare
            r--
        }
        index--
    }
    return result
};