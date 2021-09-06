import SideQuizBoardWriteUI from "./SideQuizBoardWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./SideQuizBoardWrite.queries";

export default function SideQuizBoardWrite() {
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
      });

      router.push(
        `/quiz/sidequiz/06-02-dynamic-board-read-container,presenter/${result.data.createBoard.number}`
      ); // 최근 방식(탬플릿 리터럴)
    } catch (error) {
      console.log(error);
    } // try 성공이 백프로 보장되어있지 않은 코드에 try{}를 씌워주고 catch(){}로 실패시 에러를 띄워줄수있다 (슬랙에 전송도 가능!)
  }

  return (
    <SideQuizBoardWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
    />
  );
}
