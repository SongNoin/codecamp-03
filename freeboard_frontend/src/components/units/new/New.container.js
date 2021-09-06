import NewWriteUI from "./New.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./New.queries";

export default function NewWrite() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  // 빈칸 에러 useState
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // createBoard useMutation / useState

  const [myWriter, setWriter] = useState("");
  const [myPassword, setPassword] = useState("");
  const [myTitle, setTitle] = useState("");
  const [myContents, setContents] = useState("");

  const [color, setColor] = useState(false);
  // 색 바꾸기 함수

  // 빈칸 에러 메시지 함수
  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (
      event.target.value !== "" &&
      myPassword !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      setWriterError(""); //if 문은 글이 채워졌다면 에러메시지가 안뜨게 해준다.
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (
      myWriter !== "" &&
      event.target.value !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      setPasswordError("");
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      event.target.value !== "" &&
      myContents !== ""
    ) {
      setTitleError("");
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      event.target.value !== "" &&
      myContents !== ""
    ) {
      setContentsError("");
      setColor(true);
    } else {
      setColor(false);
    }
  }

  async function onClickCorrect() {
    if (myWriter == "") {
      setWriterError("입력되지 않았습니다!");
    }

    if (myPassword == "") {
      setPasswordError("입력되지 않았습니다!");
    }

    if (myTitle == "") {
      setTitleError("입력되지 않았습니다!");
    }

    if (myContents == "") {
      setContentsError("입력되지 않았습니다!");
    }
    try {
      const result = await createBoard({
        // network 창에 뜨는 graphql 과 짝궁 (여기서 graphql 창이 생김)
        variables: {
          createBoardInput: {
            writer: myWriter, //이름을 동일하게 줄수도 있음  [키와 밸류가 같으면 생략가능!] ex) writer, 하고 넘어가도 됨
            password: myPassword,
            title: myTitle,
            contents: myContents,
          },
        },
      });
      console.log(result.data.createBoard._id);
      // router.push("/boards/detail/" + result.data.createBoard._id); // 옛날방식
      router.push(`/boards/detail/${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <NewWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickCorrect={onClickCorrect}
      color={color}
    />
  );
}
