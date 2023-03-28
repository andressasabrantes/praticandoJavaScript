/* Given an array of integers nums and an integer target, return indices of the two numbers such that 
they add up to target. You may assume that each input would have exactly one solution, and you may not 
use the same element twice. You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/


function twoSums(array, target) {

   for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
            return [i, j]
        }
    }
   }
}

console.log(twoSums([2,7,11,15], 9))//[0,1]
console.log(twoSums([2,7,11,15], 18))//[1,2]
console.log(twoSums([15, 25, 8, 90], 33))//[1,2]
console.log(twoSums([15, 25, 8, 90], 98))//[2,3]