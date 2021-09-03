// **`문제 설명`**
// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.
// 100~90 → "A"
// 89~80 → "B"
// 79~70 → "C"
// 69~60 → "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**
// - score - 숫자열

// **`주의 사항`**
// - 리스트

function grade(score) {
  if (0 >= score || score >= 100) {
    console.log("잘못된 점수입니다"); // console.log 대신 result = "잘못된 점수입니다" 도 가능
  } else if (90 <= score) {
    console.log("A");
  } else if (80 <= score) {
    console.log("B");
  } else if (70 <= score) {
    console.log("C");
  } else if (60 <= score) {
    console.log("D");
  } else if (0 <= score && score < 60) {
    console.log("F");
  } else {
    console.log("잘못된 점수입니다");
  }
  //result로 했을 시 이자리에 console.log(result) 적기
}


grade(105)  // "잘못된 점수입니다"
grade(-10)  // "잘못된 점수입니다"
grade(97)   // "A"
grade(86)   // "B"
grade(75)   // "C"
grade(66)   // "D"
grade(52)   // "F"

