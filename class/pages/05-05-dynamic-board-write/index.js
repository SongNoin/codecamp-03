import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`; //  어떤 문자열이든 넣을 준비가 되어있는 세팅 /apollo 매뉴얼에 나와있다/ $ 는 apollo 규칙 / String  은 playground에 써있는대로 똑같이 적어야 한다.

export default function DynamicBoardWrite() {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }

  async function aaa() {
    try {
      const result = await createBoard({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      }); //실행(요청) / variables 에 내용 입력/ 실행하는 시점에 내용을 넣어줌 /잘 됐는지 확인하려면 playground에서 query 해보기
      console.log(result);
      console.log(result.data.createBoard.number);
      // router.push("/05-06-dynamic-board-read/" + result.data.createBoard.number); // 옛날 방식
      router.push(
        `/05-06-dynamic-board-read/${result.data.createBoard.number}`
      ); // 최근 방식(탬플릿 리터럴)
    } catch (error) {
      console.log(error);
    } // try 성공이 백프로 보장되어있지 않은 코드에 try{}를 씌워주고 catch(){}로 실패시 에러를 띄워줄수있다 (슬랙에 전송도 가능!)
  }

  return (
    <>
      작성자 : <input type="text" onChange={onChangeMyWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeMyContents} />
      <br />
      <button onClick={aaa}>GRAPHQL-API요청하기</button>
    </>
  );
}
