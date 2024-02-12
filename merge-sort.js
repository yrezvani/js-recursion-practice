function mergeSort (arr) {
    if (arr.length <= 1) return arr

    const middleIndex = Math.floor(arr.length/2);
    const leftHalf = arr.slice(0,middleIndex);
    const rightHalf = arr.slice(middleIndex);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge (leftHalf, rightHalf) {
    let sortedArray = [];

    while (leftHalf.length && rightHalf.length) {
        if (leftHalf[0] <= rightHalf[0]) {
            sortedArray.push(leftHalf.shift())
        } else {
            sortedArray.push(rightHalf.shift());
        }
    }

    return sortedArray.concat(leftHalf.slice()).concat(rightHalf.slice());
}

console.log(mergeSort([105, 79, 100, 110]));