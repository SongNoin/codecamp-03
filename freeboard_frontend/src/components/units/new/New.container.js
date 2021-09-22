import NewWriteUI from "./New.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./New.queries";

export default function NewWrite(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.number },
  });

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
  const [myYoutube, setYoutube] = useState("");
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  // 색 바꾸기 함수

  const [color, setColor] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen((prev) => !prev);
  };
  function onTogleAddress() {
    setIsOpen((prev) => !prev);
  }

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
      myTitle !== "" &&
      event.target.value !== ""
    ) {
      setContentsError("");
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function onChangeYoutube(event) {
    setYoutube(event.target.value);
  }

  function onChangeAddressDetail(event) {
    setMyAddressDetail(event.target.value);
  }

  function onCompleteAddressSearch(data) {
    setMyAddress(data.address);
    setMyZipcode(data.zonecode);
    setIsOpen(false);
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
            youtubeUrl: myYoutube,
            boardAddress: {
              zipcode: myZipcode,
              address: myAddress,
              addressDetail: myAddressDetail,
            },
          },
        },
      });
      alert("게시물을 등록합니다~");
      // router.push("/boards/detail/" + result.data.createBoard._id); // 옛날방식
      router.push(`/boards/detail/${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onClickEdit() {
    if (
      !myTitle &&
      !myContents &&
      !myYoutube &&
      !myZipcode &&
      !myAddress &&
      !myAddressDetail
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    try {
      await updateBoard({
        variables: {
          updateBoardInput: {
            title: myTitle,
            contents: myContents,
            boardAddress: {
              zipcode: myZipcode,
              address: myAddress,
              addressDetail: myAddressDetail,
            },
          },
          password: myPassword,
          boardId: router.query.number,
        },
      });
      alert("게시물을 수정합니다~");
      router.push(`/boards/detail/${router.query.number}/`);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickList() {
    router.push(`/boards/list/`);
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
      onChangeYoutube={onChangeYoutube}
      onClickCorrect={onClickCorrect}
      color={color}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      onClickList={onClickList}
      data={data}
      handleComplete={handleComplete}
      onTogleAddress={onTogleAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isOpen={isOpen}
      myZipcode={myZipcode}
      myAddress={myAddress}

      // 함수 변수 를 넘어주는 작업
    />
  );
}
