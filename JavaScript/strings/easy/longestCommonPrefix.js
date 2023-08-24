/**
*  Problem Description:
        Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string "".

    Problem Constraints:
        1 <= array.length <= 200
        0 <= array[i].length <= 200


    Input Format
        Input: array = ["flower","flow","flight"]

    Output Format
        Output: "fl"
*/


function longestCommonPrefix(array){
    if(array.length === 1){
        return array[0]
    }
    if(!array.length){
        return ""
    }
    let result = ''
    for(let i=0; i<=array[0].length; i++){
        let _result = compare(array[0].charAt(i), i, array)
        if(!_result){
            return result
        } else {
            result += _result
        }
    }
    return result
}

function compare(char, charIndex, array){
    let i=1;
    let count = 1
    while(i<array.length){
        if(array[i].charAt(charIndex) && array[i].charAt(charIndex) === char){
            count++
        }
        i++;
    }
    return count === array.length ? char : null
}


// console.log(longestCommonPrefix(["abcdefgh", "aefghijk", "abcefgh"]), "longestCommonPrefix)")

// console.log(longestCommonPrefix(["ababd", "ab", "abcd"]))

console.log(longestCommonPrefix(["cir","car"]), "-------")