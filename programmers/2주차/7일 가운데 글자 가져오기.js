// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  let answer = [];
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2]
  } else {
    answer = s[(s.length + 1) / 2 - 1]
  }
  return answer;
}




// 내 풀이 1
// function solution(s) {
//     let answer = '';
//     if (s.length % 2 === 0){
//         answer = s[s.length/2-1] + s[s.length/2]
//     } else {
//         answer = s[(s.length-1)/2]
//     }
//     return answer;
// }

//Reference 1 if 조건문
// function solution(s) {
// 가운데에 있는 글자의 인덱스 값을 저장
//     const half = Math.floor(s.length/2); //  Math.floor() 내림값 함수

//     if (s.length % 2 === 0){
// 짝수일 경우
//         return s[half-1] + s[half];
//     } else {
// 홀수일 경우
//         return s[half]
//     }
// }

// Reference 2 삼항 연산자
// function solution(s) {
//     const half = Math.floor(s.length/2)
//     return s.length % 2 === 0
//         ? s[half-1 ] + s[half]
//         : s[half]
// }
