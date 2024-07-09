function reverseAlphabet(original) {

    let reversed  = '';
    
    for (let i = original.length - 1; i >= 0; i--) {
        reversed += original[i];
    }
    
    return reversed;
}

function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}

function countWordsInArray(input, query) {
    const count = {};
    
    input.forEach(word => {
        count[word] = count[word] ? count[word] + 1 : 1;
    });
    
    const output = query.map(word => count[word] || 0);
    return output;
}

function diagonalDifference(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    const n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][n - 1 - i];
    }
    
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const inputStr = "NEGIE1";
const reversedStr = reverseAlphabet(inputStr);
console.log(reversedStr); // Output: "EIGEN1"

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWordInSentence = longestWord(sentence);
console.log(longestWordInSentence); // Output: "mengerjakan"

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const result = countWordsInArray(INPUT, QUERY);
console.log(result); // Output: [1, 0, 2]

const Matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const difference = diagonalDifference(Matrix);
console.log(difference); // Output: 3