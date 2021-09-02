import axios from "axios"; // 첫날에 설치를 해놨기 때문에 가능

export default function RestGetUser() {
  async function zzz() {
    const result = await axios.get(" https://koreanjson.com/users"); // koreanjson 백엔드로 가는 http라는 길이 만들어짐
    console.log(result);
  }

  return (
    <>
      <button onClick={zzz}>REST-API 요청하기</button>
    </>
  );
}
