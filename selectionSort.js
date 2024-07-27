// TODO :    COMPLEXITY 0(n^2)


let Array = [64, 34, 25, 5, 22, 11, 90, 12];
    //        0   1   2  3   4   5   6   7
let n = Array.length;
for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (Array[j] < Array[minIndex]) minIndex = j;  
    }
    let minValue = Array[minIndex];
    Array[minIndex] = Array[i];
    Array[i] = minValue;
}

console.log(Array);