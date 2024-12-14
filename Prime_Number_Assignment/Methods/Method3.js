export default function SieveMethod(start, end) {
  const isPrime = Array(end + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= end; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= end; j += i) {
        isPrime[j] = false;
      }
    }
  }
  const primes = [];
  for (let i = Math.max(start, 2); i <= end; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  console.log(primes.join(","));
  return primes;
}
