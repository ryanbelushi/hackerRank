// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description
// Complete the  function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers
// Return
// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .
// Constraints
// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15

// Explanation
// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
// Note: |x| is the absolute value of x

const array = [
    [11,2,4], //0
    [4,5,6],  // 1
    [10,8,-12]]; //2
    
    function diagonalDifference(arr) {
        // Write your code here
        let leftDiagonal = 0;
        let rightDiagonal = 0;
    
        for(let index = 0; index < arr.length; index++){
            leftDiagonal+= arr[index][index];
            rightDiagonal+= arr[index][arr.length - 1 - index]
        }
    
        let abstoluteDifference = leftDiagonal - rightDiagonal

        return Math.abs(abstoluteDifference); // Transforma numero negativo em positivo
    };
    
    console.log(diagonalDifference(array));

// Neste problema, para pegar de trás para frente pegamos novamente o valor do index: 

//rightDiagonal+= arr[index][arr.length - 1 - index]
//Assim conseguimos manter a subtração pelo valor total do array, sem retornar o mesmo numero.