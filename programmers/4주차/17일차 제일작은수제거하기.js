// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

// 내 풀이 1

function solution(arr) {
  let answer = [];
  let small = Math.min.apply(null, arr); // null 은 배열이나 객체를 상속

  if (arr.length === 1) {
    return [-1];
  }
  answer = arr.filter((el) => el !== small);
  // answer = arr.filter(small)
  return answer;
}

// Refernce 1

function solution(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  arr.splice(arr.indexOf(min), 1);
  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}

// Refernce 2

function solution(arr) {
  // 스프레드 연산자를 이용한 제일 작은 수 찾기
  const min = Math.min(...arr);
  // const min = Math.min.apply ( null , arr);
  
  const result = arr.filter((num) => {
    return num > min;
  });
  return result.length === 0 ? [-1] : result;
}
