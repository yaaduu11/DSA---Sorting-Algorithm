// TODO :    COMPLEXITY 0(n^2)


function insertionSort(array) {
    for(let i=1;i<array.length;i++) {
        let cur = array[i]
        let j = i -1
        while( j >= 0 && array[j] > cur) {
            array[j+1] = array[j]
            j = j-1
        }
        array[j+1] = cur
    }
    return array
}

console.log(insertionSort([9,5,-1,52,12,39,45]))