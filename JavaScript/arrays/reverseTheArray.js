/**
*  You are given a constant array A.
    You are required to return another array which is the reversed form of the input array..

    Problem Constraints:
            1 <= A.size() <= 10000
            1 <= A[i] <= 10000

    Input Format
            First argument is a constant array A.

    Output Format
            Return an integer array.

*/

// Solution:

function reverseArray(A){
    let i=0;
    let j=A.length-1;
    while(i<j){
        let temp =A[i];
        A[i] = A[j];
        A[j] = temp;
        i++;
        j--;
    }
    return A
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
console.log(reverseArray([1,2,3,2,1]))

// Function Call 2:
// reverseArray([1,1,10])