// TODO :    COMPLEXITY 0(n  log n)


function mergeSort(array) {
    if(array.length < 2) return array;

    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sortedArray = []
    while(left.length && right.length) {
        if(left[0] > right[0]) sortedArray.push(right.shift())
            else sortedArray.push(left.shift())
    }
    return [...sortedArray, ...left, ...right]
}

console.log(mergeSort([8,4,5,6,2,1,7,3]))