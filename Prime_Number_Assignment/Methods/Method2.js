export default function SquareRootMethod(start, end) {
  const nums = [];
  for (let i = start; i <= end; i++) {
    if (i < 2) {
      continue;
    }
    let count = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count = count + 1;
        break;
      }
    }
    if (count === 0) {
      nums.push(i);
    }
  }
  console.log(nums.join(","));
  return nums;
}
