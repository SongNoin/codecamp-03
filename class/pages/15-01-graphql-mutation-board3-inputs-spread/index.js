import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`; //  어떤 문자열이든 넣을 준비가 되어있는 세팅 /apollo 매뉴얼에 나와있다/ $ 는 apollo 규칙 / String  은 playground에 써있는대로 똑같이 적어야 한다.

// **04-04-graphql-mutation-board3 와 비교해서 학습하기!!!**
export default function GraphqlMutationBoard3Page() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value, // 앞에 키값에 .이들어가면 안되기 때문에 []로 감싸줘야한다.
      // writer: myInputs.writer
      // title : myInputs.title
      // contents : myInputs.contents
      // writer: "철수"
    });

    event.target.name;
    event.target.value;
  }

  // function onChangeMyWriter(event) {
  //   setMyWriter(event.target.value);
  // }

  // function onChangeMyTitle(event) {
  //   setMyTitle(event.target.value);
  // }

  // function onChangeMyContents(event) {
  //   setMyContents(event.target.value);
  // }

  async function aaa() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return (
    <>
      작성자 : <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목 : <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용 : <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={aaa}>GRAPHQL-API요청하기</button>
    </>
  );
}
