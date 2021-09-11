export default function TypescriptPage() {
  //문자 타입 - 타입추론
  let aaa = "안녕하세요";

  aaa = 3;

  let bbb: string;
  bbb = "반갑습니다";
  bbb = 123;

  //숫자 타입
  let ccc: number = 5;

  ccc = "333";

  // 배열 타입
  let ddd: number[] = [1, 2, 3, 4, 5, 6];
  let eee: (number | string)[] = ["1", 2, 3, 4, 5, 6]; // 타입스크립트에선 || 를 | 로 쓴다
  let fff: number[] | string[] = [1, 2, 3, 4, 5, 6];

  // 객체 타입
  interface IProfile {
    school: string;
    age: number;
  }

  let profile: IProfile = {
    school: "다람쥐 초등학교",
    age: 13,
  };
  profile.age = "bbb";

  return <div>타입스크립트 페이지 입니다.</div>;
}


