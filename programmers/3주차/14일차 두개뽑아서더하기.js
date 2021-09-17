// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는
// 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

function solution(numbers) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let is = i + 1; is < numbers.length; is++) {
      arr.push(numbers[i] + numbers[is]);
    }
  }

  arr = arr.sort((a, b) => a - b);

  for (let iss = 0; iss < arr.length; iss++) {
    if (arr[iss] !== arr[iss + 1]) {
      answer.push(arr[iss]);
    }
  }
  return answer;
}

// 내 풀이
function solution(numbers) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let is = i + 1; is < numbers.length; is++) {
      arr.push(numbers[i] + numbers[is]);
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  answer = [...new Set(arr)];
  return answer;
}

// Reference 1

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      //서로 다른 인덱스 값을 더해서 저장하는 함수
      const sum = numbers[i] + numbers[j];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// Reference 2

function solution(numbers) {
  let answer = [];

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });
  return answer.sort((a,b) => a-b )
}

//공부해야할 함수
// Set()
