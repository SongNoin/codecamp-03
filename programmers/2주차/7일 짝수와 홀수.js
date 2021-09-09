// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

// 내풀이 1
// function solution(num) {
//   let answer = "";
//   if (num % 2 === 1 || num % 2 === -1) {
//     answer = "Odd";
//   } else if (num % 2 === 0) {
//     answer = "Even";
//   }
//   return answer;
// }

//Reference 1 if 조건문
//function solution(num){
//     if(num % 2  === 0) {
//         return 'Even'
//     } else {
//         return 'Odd'
//     }

// }

// Reference 2 삼항연산자
// function solution(num){
//     return num% 2 === 0
//     ?'Even'
//     :'Odd'
// }
