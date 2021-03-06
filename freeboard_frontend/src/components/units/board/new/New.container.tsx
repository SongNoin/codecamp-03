import { useState } from "react";

import NewWriteUI from "./New.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_BOARD,
  UPLOAD_FILE,
} from "./New.queries";
interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export default function NewWrite(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

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
  // const [fileUrls, setFileUrls] = useState(["", "", ""]); // 이미지 1차실습
  const [files, setFiles] = useState([null, null, null]);

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
      setWriterError(""); // if 문은 글이 채워졌다면 에러메시지가 안뜨게 해준다.
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

  function onCompleteAddressSearch(data: any) {
    setMyAddress(data.address);
    setMyZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function onClickSubmit() {
    if (myWriter === "") {
      setWriterError("입력되지 않았습니다!");
    }

    if (myPassword === "") {
      setPasswordError("입력되지 않았습니다!");
    }

    if (myTitle === "") {
      setTitleError("입력되지 않았습니다!");
    }

    if (myContents === "") {
      setContentsError("입력되지 않았습니다!");
    }
    try {
      const uploadFiles = files
        .filter((el) => el)
        .map((el) => uploadFile({ variables: { file: el } }));
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el.data.uploadFile.url);

      const result = await createBoard({
        // network 창에 뜨는 graphql 과 짝궁 (여기서 graphql 창이 생김)
        variables: {
          createBoardInput: {
            writer: myWriter, // 이름을 동일하게 줄수도 있음  [키와 밸류가 같으면 생략가능!] ex) writer, 하고 넘어가도 됨
            password: myPassword,
            title: myTitle,
            contents: myContents,
            youtubeUrl: myYoutube,
            boardAddress: {
              zipcode: myZipcode,
              address: myAddress,
              addressDetail: myAddressDetail,
            },
            // images: [...fileUrls], // * 이미지 1차실습
            images: myImages,
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

    const myUpdateboardInput: IMyUpdateBoardInput = {};
    if (myTitle) myUpdateboardInput.title = myTitle;
    if (myContents) myUpdateboardInput.contents = myContents;
    if (myYoutube) myUpdateboardInput.youtubeUrl = myYoutube;
    if (myZipcode || myAddress || myAddressDetail) {
      myUpdateboardInput.boardAddress = {};
      if (myZipcode) myUpdateboardInput.boardAddress.zipcode = myZipcode;
      if (myAddress) myUpdateboardInput.boardAddress.address = myAddress;
      if (myAddressDetail)
        myUpdateboardInput.boardAddress.addressDetail = myAddressDetail;
    }

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateboardInput.images = nextImages;

    if (props.data?.fetchBoard.images?.length) {
      const prevImages = [...props.data?.fetchBoard.images];
      myUpdateboardInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateboardInput.images = nextImages;
    }

    try {
      await updateBoard({
        variables: {
          boardId: router.query.number,
          password: myPassword,
          updateBoardInput: myUpdateboardInput,
        },
      });
      router.push(`/boards/detail/${router.query.number}`);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickList() {
    router.push(`/boards/list/`);
  }

  // *************** 1차 이미지 실습 **********************
  // function onChangeFileUrls(fileUrl, index) {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   console.log(newFileUrls);
  //   setFileUrls(newFileUrls);
  // }

  // **************** 2차 이미지 실습 *****************
  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
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
      onClickSubmit={onClickSubmit}
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
      // onChangeFileUrls={onChangeFileUrls}
      // fileUrls={fileUrls}
      onChangeFiles={onChangeFiles}

      // 함수 변수 를 넘어주는 작업
    />
  );
}
