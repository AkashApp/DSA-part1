// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const towSum1 = (nums, target) => {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+ nums[j] === target){
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
console.log(towSum1([1,2,3,4], 6));


// Using JS objects
const towSum2 = (nums, target)=>{
    let obj={};
    for(let i=0;i<nums.length; i++){
        if(obj[target-nums[i]] >=0){
            return[obj[target-nums[i]], i];
        }else{
            obj[nums[i]] = i;
        }
    }
    return [-1,-1];
}
console.log(towSum2([2,7,11,15], 26));


//  If array is sorted
// const towSum = (nums, target) => {
//     let slow = 0;
//     let fast = 1;

//     while (fast < nums.length) {
//         if (nums[slow] + nums[fast] === target) {
//             return [slow, fast];
//         } else if (nums[slow] + nums[fast] < target) {
//             fast++;
//         } else {
//             slow++;
//         }
//     }
// }
