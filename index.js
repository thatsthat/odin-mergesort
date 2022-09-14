function mergeSort(iArr) {
  // Divide into two smaller arrays as even as possible
  let l1 = (iArr.length - (iArr.length % 2)) / 2;
  let subArr1 = iArr.slice(0, l1);
  let subArr2 = iArr.slice(l1);

  return [subArr1, subArr2];
}
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7]));
