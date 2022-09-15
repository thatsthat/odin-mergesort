function fibs(fibP, prevs = [0, 1]) {
  if (fibP == 1) {
    return 0;
  }
  if (fibP == 2) {
    return 1;
  }
  if (fibP == 3) {
    return prevs[0] + prevs[1];
  } else {
    prevs = [fibs(fibP - 2), fibs(fibP - 1)];
  }
  return prevs[0] + prevs[1];
}
for (let i = 1; i < 21; i++) {
  console.log(fibs(i));
}
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
