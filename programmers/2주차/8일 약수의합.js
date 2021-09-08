// Reference 1
// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       answer = answer + i;
//     }
//   }

//   return answer;
// }

// Reference 2
function solution(n) {
  let answer = 0;

  const array = new Array(n).fill(1).forEach((num, index) => {
    n % (num + index) === 0 ? (answer = answer + (num + index)) : null;
  });
  return answer;
}
