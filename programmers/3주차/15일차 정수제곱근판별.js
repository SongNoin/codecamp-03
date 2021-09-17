// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

// 내 풀이1
function solution(n) {
  let answer = 0;
  if (Number.isInteger(Math.sqrt(n)) === true) {
    answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  } else {
    return -1;
  }
  return answer;
}

// 내 풀이 2

function solution(n) {
  let answer = 0;
  Number.isInteger(Math.sqrt(n)) === true
    ? (answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1))
    : (answer = -1);
  return answer;
}

// Reference 1

function solution(n) {
  let result = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      result = i + 1;
      return result * result;
    }
  }
  return result;
}

// Reference 2

function solution(n) {
  let num = 1;
  while (num * num < n) {
    num++;
  }
  return num * num === n ? (num + 1) * (num + 1) : -1;
}

// Reference 3

function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    sqrt += 1;
    return sqrt * sqrt;
  } else {
    return -1;
  }
}
