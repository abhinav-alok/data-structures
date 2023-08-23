/**
*  Given an integer array array of size N and an integer num, you have to return the same array 
   after rotating it num times towards the right.

    Problem Constraints:
            1 <= N <= 105
            1 <= array[i] <=109
            1 <= num <= 10

    Input Format
            The first argument given is the integer array array.
            The second argument given is the integer num.

    Output Format
            Return the array array after rotating it num times to the right

*/

// Solution:

function rotateTheArray(array, num){
    num = num%array.length
        let i=0, j=array.length-1;
        while(i<j){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
        let x = 0, y = num-1;
        while(x<y){
            let temp = array[x];
            array[x] = array[y];
            array[y] = temp;
            x++;
            y--;
        }
        let a = num, b = array.length-1;
        while(a<b){
            let temp = array[a];
            array[a] = array[b];
            array[b] = temp;
            a++;
            b--;
        }
        return array  
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(rotateTheArray([1, 2, 3, 4], 2))

// Function Call 2:
console.log(rotateTheArray([2, 5, 6], 1))