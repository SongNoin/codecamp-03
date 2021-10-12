//* 내 풀이 ( 코드는 맞는 데 시간초과 및 효율성 불통)

function solution(n) {
  let answer = 0;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    answer = 0;
    for (let is = 1; is <= i; is++) {
      if (i % is === 0) {
        answer++;
      } else if (answer > 2) {
        break;
      }
    }
    if (answer === 2) {
      result++;
    }
  }
  return result;
}

//* Reference 1 ( 코드는 맞는 데 시간초과 및 효율성 불통)

function solution(n) {
  // 소수인지 아닌지 판별하는 함수
  function check(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) return false;
    }
    return true;
    // if(소수라면?){
    //     return true
    // } else {
    //     return false
    // }
  }
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (check(i) === true) count = count + 1;
  }
}


//* Reference 2 ( 시간초과 1개만 틀림 ) 소수는 어차피 나누기 2해서 구해도 똑같다 그래서 /2를 해준다. ex) 20의 
function solution(n) {
    // 소수인지 아닌지 판별하는 함수
    function check(i) {
      for (let j = 2; j < i/2; j++) {
        if (i % j === 0) return false;
      }
      return true;
      // if(소수라면?){
      //     return true
      // } else {
      //     return false
      // }
    }
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (check(i) === true) count = count + 1;
    }
  }
  

//* Referencr 3
function solution(n) {
    // 소수인지 아닌지 판별하는 함수
    function check(i) {
      for (let j = 2; j*j<=i; j++) {
        if (i % j === 0) return false;
      }
      return true;
      // if(소수라면?){
      //     return true
      // } else {
      //     return false
      // }
    }
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (check(i) === true) count = count + 1;
    }
}
  



//* 에라토스테네스의 체
// https://library-of-k.tistory.com/79

정답코드: 
function solution(n) {
    let answer = 0;
    
    // 2부터 n 까지의 숫자들을 담아주는 배열
    const numbers = [];
    for(let i = 2; i <= n; i++) {
        // numbers.push(i);
        numbers[i - 2] = i;
    }
    
    for(let i = 2; i * i <= n; i++) {
		// l = l + i;
        for(let l = i * i; l <= n; l += i) {
            numbers[l - 2] = false;
        }
    }

		// 배열에서 false 값 (= 소수가 아닌 값)을 제거한다. 
    answer = numbers.filter( data => data !== false );

    return answer.length;
}