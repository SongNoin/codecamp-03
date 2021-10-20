// Reference 1 (3진법으로 변환)
function solution(n) {
  n = n.toString(3);

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}

// Reference 2 (reverse )
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

function solution(n, arr1, arr2) {
  let answer = [];
  parseInt(n.toString(2), 2);
  for (let i = 0; i < n; i++) {
    for (let is = 0; is < n; is++) {
      if (arr1[is] === 1) {
      }
    }
  }
  return n.toString(2);
}
