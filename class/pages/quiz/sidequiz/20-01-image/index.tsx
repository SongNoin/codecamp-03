import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import { fileValidation } from "../../../../src/commons/libraries/validation";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImagePage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  // #########################################################
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }
  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }
  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }
  // #########################################################
  async function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);
    if (!fileValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // 파일을 넣으면 임시 URL 이 부여된다.
    // 내 컴퓨터에서만 사용되는 임시 URL
    fileReader.onload = (data) => {
      // console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  }

  function onClickGray() {
    fileRef.current.click();
  }

  async function onClickSubmit() {
    const result = await Promise.all([
      // Promise 는 순서 상관없어야 가능한것! 순서가 중요하다면 아래 주석방법을 써야한다.
      uploadFile({
        variables: {
          file: myFile,
        },
      }),
      uploadFile({
        variables: {
          file: myFile,
        },
      }),
      uploadFile({
        variables: {
          file: myFile,
        },
      }),
      uploadFile({
        variables: {
          file: myFile,
        },
      }),
      uploadFile({
        variables: {
          file: myFile,
        }, // 여기도 map으로 가능하지만 어려울 수 있다.
      }),
    ]);
    const urls = result.map((el) => el.data.uploadFile.url);

    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: urls,
        },
      },
    });
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      비밀번호 : <input type="password" onChange={onChangeMyPassword} />
      <br />
      제목 : <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용 :
      <input type="text" onChange={onChangeMyContents} />
      <br />
      {/* ################################################### */}
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <br />
      <img src={imageUrl} />
      <br />
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "yellow" }}
        onClick={onClickGray}
      >
        이미지선택
      </div>
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
