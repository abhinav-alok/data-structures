/**
 *  Problem Description:
            Given an array array of N integers and also given two integers num1 and num2. 
            Reverse the elements of the array array within the given inclusive range [num1, num2].

    Problem Constraints:
            1 <= N <= 105
            1 <= array[i] <= 109
            0 <= num1 <= num2 <= N - 1

    Input Format
            The first argument array is an array of integer.
            The second and third arguments are integers num1 and num2

    Output Format
            Return the array array after reversing in the given range.


*/

// Solution:

function rangeReverse(array, num1, num2){
    while(num1 < num2) {
        let temp = array[num1];
        array[num1] = array[num2];
        array[num2] = temp;
        num1++;
        num2--
    }
    return array
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
console.log(rangeReverse([1, 2, 3, 4], 2, 3))

// Function Call 2:
// rangeReverse([2, 5, 6], 0, 2)