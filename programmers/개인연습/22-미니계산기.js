// **`문제 설명`**
// 숫자 2개와 연산자를 입력받아 알맞게 계산하는 미니계산기 함수를 만들어주세요.
// num1과 num2는 숫자열, operator는 문자열로 입력됩니다.
// operator "+", "/", "-", "*" 이외의 다른 값이 들어온다면
// "올바른 입력이 아닙니다"라는 문구를 띄워주세요.

// **`입력 인자`**
// - num1 - 0 이상의 자연수
// - num2 - 0 이상의 자연수
// - operator - "+",  "/",  "-",  "*", 혹은 다른 문자열

// **`주의 사항`**
// - operator에 올바르지 않은 연산자가 들어오는 경우를 조심하세요.

function calculator(num1, num2, operator) {
  if (operator === "+") {
    console.log(num1 + num2);
    // return num1 + num2;
  } else if (operator === "-") {
    console.log(num1 - num2);
    // return num1 - num2;
  } else if (operator === "*") {
    console.log(num1 * num2);
    // return num1 * num2;
  } else if (operator === "/") {
    console.log(`나눈 결과값 ${num1 / num2}`);
    // return num1 / num2;
  }
}

calculator(10, 2, "/"); // 5
