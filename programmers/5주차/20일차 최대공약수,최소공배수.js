// https://programmers.co.kr/learn/courses/30/lessons/12940

// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]
// 입출력 예 설명
// 입출력 예 #1
// 위의 설명과 같습니다.

// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

// 배운점
// 1. 최소 공배수 = x * y / 최대공약수
// 2. 교집합구하기  arr1.filter((x) => arr2.includes(x))
// 3. 배열의 마지막 값 가져오기  arr1.slice(-1)[0]

// 내 풀이 1

function solution(n, m) {
  let answer = [];
  let nb = [];
  let mb = [];
  let nmb = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      nb.push(i);
    }
  }
  for (let i = 1; i < m + 1; i++) {
    if (m % i === 0) {
      mb.push(i);
    }
  }
  nmb = nb.filter((x) => mb.includes(x));
  answer = [nmb.slice(-1)[0], (n * m) / nmb.slice(-1)[0]];
  return answer;
}

// RE
