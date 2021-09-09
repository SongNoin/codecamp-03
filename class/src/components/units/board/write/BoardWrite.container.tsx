import BoardWriteUI from "./BoardWrite.presenter"; // presenter 연결을 위한 import // 중괄호가 없어도 에러가 안남(이유 : 중괄호가 있는것은 여러개를 중괄호로 감싸서 보내기때문에)
import { useState } from "react";
import { useMutation } from "@apollo/client";
// 기능들도 다 import 해와야한다.
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
//query를 위한 함수도 import 하기
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [zzz, setZzz] = useState(false); // 색깔 바꾸기 함수
  const [qqq, setQqq] = useState(false);

  // myWriter, myContents 모두 내용이 저장되어 있다면,
  // 즉 (myWriter !=="" && myTitle !== ""&& myContents !== "") 라면,
  // setQqq를 사용해서, false => true, 이모션의 버튼색을 노란색으로 변경하기

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }
  function onChangeMyContents(event) {
    setMyContents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }
  async function aaa() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    }); //실행(요청) / variables 에 내용 입력/ 실행하는 시점에 내용을 넣어줌 /잘 됐는지 확인하려면 playground에서 query 해보기
    console.log(result);
    console.log(result.data.createBoard.number);
    router.push(`/08-04-board-detail/${result.data.createBoard.number}`);
  }

  async function onClickEdit() {
    try {
      // 1. state의 초기값에도 defaultValue 를 넣어주는 방법
      // 2. 실제로 변경이 일어난 값만 수정하려고 Backend에 요청하는 방법 ( 2번이 더 효율적 )
      const myVariables = {
        number: Number(router.query.number),
      };
      if (myWriter !== "") myVariables.writer = myWriter;
      if (myTitle) myVariables.title = myTitle;
      if (myContents) myVariables.contents = myContents;
      await updateBoard({
        variables: myVariables,
      });
      router.push(`/08-04-board-detail/${router.query.number}/`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <BoardWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
      qqq={qqq}
      zzz={zzz}
      isEdit={props.isEdit}
      data={props.data}
      onClickEdit={onClickEdit}
    />
  );
  //한줄일땐 괄호생략가능 두줄부터 ()붙여야한다.
  //html 연결
  //함수랑 변수도 연결
}
