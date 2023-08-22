/**
*  Given an integer array A of size N and an integer B, you have to return the same array 
   after rotating it B times towards the right.

    Problem Constraints:
            1 <= N <= 105
            1 <= A[i] <=109
            1 <= B <= 10

    Input Format
            The first argument given is the integer array A.
            The second argument given is the integer B.

    Output Format
            Return the array A after rotating it B times to the right

*/

// Solution:

function rotateTheArray(A, B){
    B = B%A.length
        let i=0, j=A.length-1;
        while(i<j){
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            i++;
            j--;
        }
        let x = 0, y = B-1;
        while(x<y){
            let temp = A[x];
            A[x] = A[y];
            A[y] = temp;
            x++;
            y--;
        }
        let a = B, b = A.length-1;
        while(a<b){
            let temp = A[a];
            A[a] = A[b];
            A[b] = temp;
            a++;
            b--;
        }
        return A  
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(rotateTheArray([1, 2, 3, 4], 2))

// Function Call 2:
console.log(rotateTheArray([2, 5, 6], 1))