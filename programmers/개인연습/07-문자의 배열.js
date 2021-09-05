// **`문제 설명`**
// 상수 number는 핸드폰 번호가 담긴 문자열입니다. 
// 해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

// **`입력 인자`**
// - X



const number = "01012345678"
arr=[number.slice(0,3),number.slice(3,7),number.slice(7,11)]
console.log(arr)