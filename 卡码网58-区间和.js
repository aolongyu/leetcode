const sum = (list, l, r) => {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += list[i];
  }
  return sum;
};

console.log(sum([1, 2, 3, 4, 5], 0, 1));
console.log(sum([1, 2, 3, 4, 5], 1, 4));
