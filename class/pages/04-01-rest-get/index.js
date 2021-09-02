import axios from 'axios' // 첫날에 설치를 해놨기 때문에 가능

export default function RestGetPage(){

    async function zzz(){ //async/await 동기전송으로 변경, 작업이 완료된후 아래 코드 실행
        const result = await axios.get("https://koreanjson.com/posts/1") // koreanjson 백엔드로 가는 http라는 길이 만들어짐
        console.log(result) 
    }
    
    return(

        <button onClick={zzz}>REST-API 요청하기</button>
    )

}