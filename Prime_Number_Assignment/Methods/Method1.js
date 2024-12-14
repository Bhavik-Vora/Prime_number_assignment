export const NaiveMethod = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    let isPrime = true;
    if (i <= 1) {
      isPrime = false;
    }
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      arr.push(i);
    }
  }
  console.log(arr.join(","));
  return arr;
};
