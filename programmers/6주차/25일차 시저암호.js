//* https://programmers.co.kr/learn/courses/30/lessons/12926

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

// 내풀이 1 (아스키코드로 시도해보았지만 Z 에서 A로 돌아가기 힘들어서 실패 -> 대문자 소문자 남아서 이중 if문 해주니 성공 다만 너무길다..)
// 아스키 코드 사용법 
// console.log("az".charCodeAt(1)) 문자를 아스키코드로 변환
// console.log(String.fromCharCode(65)) 아스키코드를 문자로 변환

function solution(s, n) {
    let answer = [];
    let number = [];
    let result = [];
    for(let i = 0 ; i < s.length ; i++){
        number.push(s.charCodeAt(i))
    }
    for(let is= 0 ; is< number.length ; is ++){
        if(number[is] === 32){
            answer.push(32)
        } else if(97<= number[is] && number[is]<=122){
            if(number[is]+n >122){
                answer.push (number[is]+n-26)
            } else{
                answer.push (number[is]+n)
            }
        } else {
            if(number[is]+n >90){
                answer.push(number[is]+n-26)
            } else{
                answer.push (number[is]+n)
            }
        }
    }
    for (let iss = 0 ; iss < answer.length ; iss ++){
        result.push((String.fromCharCode(answer[iss])).toString())
    }
    // console.log("az".charCodeAt(1))
    // console.log(String.fromCharCode(65))
    return result.join("");
}