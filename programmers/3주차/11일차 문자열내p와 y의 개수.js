// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
// 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

function solution(s) {
  let Ps = 0;
  let Ys = 0;
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      Ps++;
    } else if (s[i] === "Y") {
      Ys++;
    }
  }
  if (Ps === Ys) {
    return true;
  } else {
    return false;
  }
}

// 내 풀이 1

// function solution(s) {
//   let answer = true;
//   let pysentence = s.toUpperCase();
//   let Ps = 0;
//   let Ys = 0;
//   for (let i = 0; i < s.length; i = i + 1) {
//     if (pysentence[i] === "P") {
//       Ps = Ps + 1;
//     } else if (pysentence[i] === "Y") {
//       Ys = Ys + 1;
//     }
//   }
//   if (Ps === Ys) {
//     answer = true;
//   } else if (Ps !== Ys) {
//     answer = false;
//   }
//   return answer;
// }

// Reference 1

// function solution(s) {
//   // p 와 y의 개수를 저장하는 객체
//   const check = {
//     p: 0,
//     y: 0,
//   };

//   // 모든 글자를 소문자로 변환
//   s = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "p" || s[i] === "y") {
//       //check[s[i]] = check[s[i]] + 1;
//       check[s[i]] += 1;
//     }
//   }
//   return check.p === check.y;
// }

// Reference 2

// function solution(s){
//     const check={}
//     const result = s.toLowerCase().split("").forEach(str => {check[str] === undefined ? check[str] = 0 : check[str] += 1})
//     return check.p === check.y
// }
