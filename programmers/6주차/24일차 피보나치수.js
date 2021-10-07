// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// * n은 1이상, 100000이하인 자연수입니다.

// 입출력 예
// n	return
// 3	2
// 5	5
// 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.

// 내 풀이
function solution(n) {
  let a = 0;
  let result = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    result = (a + b) % 1234567;
    b = a;
    a = result;
  }
  return result;
}

// Reference 1 ( for 반복문 : 배열 )

function solution(n) {
  // 피보나치 수열들을 저장하는 배열
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}

// Reference 2 ( for 반복문 : 변수 )

function solution(n) {
  let prev = 0; // F(n - 2)
  let next = 1; // F(n - 1)
  let sum = 1; // F(n - 2) + F(n - 1)

  for (let i = 2; i <= n; i++) {
    sum = (prev + next) % 1234567;
    prev = next;
    next = sum;
  }
  return sum;
}
