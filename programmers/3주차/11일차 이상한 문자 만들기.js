// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로,
//  홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.


function solution(s) {
  let answer = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      idx = 0;
      answer = answer + " ";
    } else {
      answer =
        answer + (idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
      idx += 1;
    }
  }
  return answer;
}

// 내 풀이 1 ( 틀림 )

// function solution(s) {
//   let answer = "";
//   let words = s.split(" ");
//   let sentence = "";
//   let real = "";
//   for (let i = 0; i < words.length; i = i + 1) {
//     sentence = words[i];
//     for (let is = 0; is < sentence.length; is = is + 1) {
//       if (is % 2 === 0) {
//         real = real + sentence[is].toUpperCase();
//       } else {
//         real = real + sentence[is].toLowerCase();
//       }
//     }
//   }
//   console.log(real);
//   return answer;
// }

//Reference 1

// function solution(s) {
//   // 단어별로의 인덱스 값을 판단하는 함수
//   let answer = "";
//   let idx = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       // 번 공백일 경우
//       idx = 0;
//       answer += " ";
//     } else {
//       answer =
//         answer + (idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
//       idx += 1;
//     }
//   }
//   return answer;
// }

// Reference 2

// function solution(s) {
//   const answer = s
//     .split(" ")
//     .map((str) => {
//       return str
//         .split("")
//         .map((letter, i) => {
//           return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
//         })
//         .join("");
//     })
//     .join(" ");
//   return answer;
// }
