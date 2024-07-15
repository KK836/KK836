function solution(number1, denom1, number2 , denom2) {
  const number = number1 * denom2 + number2 * denom1;
  const denom = denom1 * denom2;
  let gcd = 1;

  function getGcd(number, denom) {
    let smallNumber = number > denom ? denom : number;
    for (let i = 1; i <= smallNumber; i++) {
      if (denom % i === 0 && number % i === 0) {
        gcd = i;
      }
    }
  }
  getGcd(number, denom);
  
  return [number / gcd, denom / gcd];
}



