// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8000000 미만인 정수입니다.
// 입출력 예
// n	result
// 6	8
// 16	4
// 626331	-1
// 입출력 예 설명
// 입출력 예 #1
// 문제의 설명과 같습니다.

// 입출력 예 #2
// 16 -> 8 -> 4 -> 2 -> 1 이되어 총 4번만에 1이 됩니다.

// 입출력 예 #3
// 626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야합니다.

function solution(num) {
  if (num === 1) {
    return 0;
  }
  for (let i = 0; i < 500; i++) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    if (num === 1) {
      return i + 1;
    } else if (i === 499) {
      return -1;
    }
  }
}

// 내 풀이1
function solution(num) {
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return i;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    if (i > 498) {
      return -1;
    }
  }
}

// **Refernce 1

function solution(num) {
  // 몇번 반복했는지를 저장하는 변수
  let count = -1;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      count = i;
      break;
    }
    console.log;
    if (num % 2 === 0) {
      //입력된 값이 짝수일때
      num = num / 2;
    } else if (num % 2 === 1) {
      //입력된 값이 홀수 일때
      num = num * 3 + 1;
    }
  }
  return count;
}

// **While 문 예시 - 끝을 알수가 없을 때 쓰면 좋다

function solution(num) {
  let a = 1;
  // 조건식이 true 일 때만 반복문을 실행

  while (a !== 3) {
    console.log(123);
    a = a + 1;
  }
}

// **Reference 2

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count >= 500) {
      return -1;
    }
    count = count + 1;
    if (num % 2 === 0) {
      // 짝수일때
      num = num / 2;
    } else if (num % 2 === 1) {
      // 홀수일때
      num = num * 3 + 1;
    }
  }
  return count;
}

// **여현님
function solution(num) {
	let i = 0
			while(i < 500) {
					if (num === 1) return i;
					num = num % 2 === 0
					? num/2
					: num*3 + 1
					i++;
			}
	return -1
}
