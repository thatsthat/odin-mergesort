function mergeSort(iArr) {
  if (iArr.length == 1) {
    return iArr;
  }

  // Divide into two smaller arrays as even as possible
  let l1 = (iArr.length - (iArr.length % 2)) / 2;
  let subArr1 = iArr.slice(0, l1);
  let subArr2 = iArr.slice(l1);

  // Sort the two smaller sub-arrays

  if (subArr1.length == 1) {
    var subArr1Sorted = subArr1;
  } else {
    var subArr1Sorted = mergeSort(subArr1);
  }

  if (subArr2.length == 1) {
    var subArr2Sorted = subArr2;
  } else {
    var subArr2Sorted = mergeSort(subArr2);
  }
  let mergedArr = [];
  // Merge the two sorted sub-arrays
  while (subArr1Sorted.length > 0 && subArr2Sorted.length > 0) {
    if (subArr1Sorted[0] <= subArr2Sorted[0]) {
      mergedArr.push(subArr1Sorted[0]);
      subArr1Sorted.shift();
    } else {
      mergedArr.push(subArr2Sorted[0]);
      subArr2Sorted.shift();
    }
  }
  // Once one of the two sub-arrays is empty, insert the rest of the other
  // at the end of the merged array
  if (subArr1Sorted.length > 0) {
    mergedArr.push(...subArr1Sorted);
  } else if (subArr2Sorted.length > 0) {
    mergedArr.push(...subArr2Sorted);
  }

  return mergedArr;
}
console.log(mergeSort([1, -10, -2, 45, 3]));
