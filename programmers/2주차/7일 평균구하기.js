// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.





function solution(arr) {
    let answer = 0;
    let total = 0;
    for (let i = 0 ; i < arr.length ; i = i+1){
        total = arr[i] + total
        answer = total/arr.length
    }
    return answer;
}








//Reference 1
// function solution(arr) {
    // 평균 구하기
    // 모든 정수의 합 / 정수의 갯수
    
    //모든 정수를 담는 변수
//     let sum = 0;
    
//     for (let i=0; i<arr.length; i = i+1){
//         sum = sum + arr[i];
//     }

//     return sum / arr.length
// }