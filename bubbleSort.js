// TODO :    COMPLEXITY 0(n^2)


function bubbleSort(array) {
    let swapped;
    do {
        swapped = false 
        for(let i=0;i<array.length-1;i++) {
            if(array[i]> array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }
        }
    } while(swapped) {
        return array
    }
}

console.log(bubbleSort([23,-2,5,64,21,0,8,-3,56]))