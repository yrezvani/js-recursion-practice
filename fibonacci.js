// Iterative Fibonacci
function fibs (n) {
    if (n===0) return [0];
    if (n===1) return [0,1];

    let fibNumbers = [0, 1];
    for (let i = 2; i < n; i++) {
        const newFib = fibNumbers[i-1]+fibNumbers[i-2];
        fibNumbers.push(newFib);
    }
    return fibNumbers;
}

console.log(fibs(8));

// Recursive Fibonacci
function fibsRec (n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    
    let fibNumbers = fibsRec(n-1);

    if (n === 2) {
        fibNumbers.push(1)
    } else fibNumbers.push(fibNumbers[fibNumbers.length-1] + fibNumbers[fibNumbers.length-2]);
    
    return fibNumbers;
};

console.log(fibsRec(8));