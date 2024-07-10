function solution(n) {
  let OddNumber = [];
  
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      OddNumber.push(i);
    }
  }

  return OddNumber;
}