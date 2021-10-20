//* 중요포인트
// 1. join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// 2. 배열에 배열을 주려면..? for문 안에 bomul[i] = [] 같이 배열안에 배열을 준다.

//* 내 풀이 1
function solution(n, arr1, arr2) {
  let answer1 = [];
  let answer2 = [];

  let bomul = [];
  parseInt(n.toString(2), 2);
  for (let i = 0; i < n; i++) {
    bomul[i] = [];
    answer1.push(String(arr1[i].toString(2).padStart(n, 0)));
    answer2.push(String(arr2[i].toString(2).padStart(n, 0)));
    for (let is = 0; is < n; is++) {
      if (answer1[i][is] === "1" || answer2[i][is] === "1") {
        bomul[i][is] = "#";
      } else {
        bomul[i][is] = " ";
      }
    }
    bomul[i] = bomul[i].join("");
  }

  return bomul;
}
