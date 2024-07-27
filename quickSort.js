// TODO :    COMPLEXITY 0(n  log n)


function quickSort(array) {
    if(array.length < 2) return array;

    let pivot = array[0]
    let left = [], right = []
    for(let i=1;i<array.length;i++) {
        if(array[i] < pivot) left.push(array[i])
            else right.push(array[i])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([6,2,4,1,3,5]))


//////////!  WITHOUT USING THE LEFT AND RIGHT ARRAY
function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
    return array;
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            // Swap elements
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Swap the pivot element to the correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

console.log(quickSort([6, 2, 4, 1, 3, 5])); 
