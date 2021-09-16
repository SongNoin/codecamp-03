// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

function solution(n) {
  let answer = [];
  n = String(n);
  for (let i = n.length - 1; i > -1; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

// 내 풀이 1
// function solution(n) {
//   let answer = [];
//   let number = String(n);
//   for (let i = 0; i < number.length; i++) {
//     answer.push(Number(number[number.length - 1 - i]));
//   }
//   return answer;
// }

// Reference 1

// function solution(n) {
//     const result = [];
//     // 숫자타입을 문자열 타입으로 변환
//     n=String(n);

//     for(let i= n.length -1 ; i >= 0 ; i --){
//         result.push(Number(n[i]))
//         // result.push(Number(n[i]))
//     }
//     // result.reverse();
//     return result;
// }

// Reference 2
// function solution(n) {
//   const result = n
//     .toString()
//     .split("")
//     .reverse()
//     .map((el) => {
//       return Number(el);
//     });
//   return result;
// }
