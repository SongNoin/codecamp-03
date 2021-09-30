import Uploads01UI from "./Uploads01.presenter";
// import { UPLOAD_FILE } from "./Uploads01.queries";
import { useRef, useState } from "react";
// import { useMutation } from "@apollo/client";

export default function Uploads01(props) {
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUploadImage() {
    fileRef.current?.click();
  }
  async function onChangeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }
    // * 이미지 1차
    // const result = await uploadFile({
    //   variables: {
    //     file,
    //   },
    // });
    // props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      // fileUrl={props.fileUrl}
      fileUrl={fileUrl}
      onClickUploadImage={onClickUploadImage}
      onChangeImage={onChangeImage}
    />
  );
}
