const merge = function (leftArray, rightArray) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // compare both arrays starting from element 0
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArray[rightIndex])
            rightIndex++;
        }
    }

    return resultArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));
}

const mergeSort = function (arr) {
    let n = arr.length;

    // guard clause - return if length is 1
    if (n === 1) {
        return arr;
    }

    let halfLen = Math.floor(arr.length / 2);
    let leftSide = arr.slice(0, halfLen);
    let rightSide = arr.slice(halfLen);


    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]))