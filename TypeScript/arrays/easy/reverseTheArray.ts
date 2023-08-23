/**
*  You are given a constant array array.
    You are required to return another array which is the reversed form of the input array..

    Problem Constraints:
            1 <= array.size() <= 10000
            1 <= array[i] <= 10000

    Input Format
            First argument is a constant array array.

    Output Format
            Return an integer array.

*/

// Solution:

function reverseTheArray(array: number[]): number[]{
    let i=0;
    let j=array.length-1;
    while(i<j){
        let temp =array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(reverseTheArray([1,2,3,2,1]))

// Function Call 2:
console.log(reverseTheArray([1,1,10]))