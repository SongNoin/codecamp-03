import { useRef, useState } from "react";
import Upload03UI from "./upload03.presenter";

export default function Upload03(props) {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUploadImage() {
    fileRef.current?.click();
  }

  function onChangeImage(event) {
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
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setFileUrl(data.target.result);
      props.onChangeFile(file);
    };

    // FileReader 사용자의 파일의내용을 사용자의 컴퓨터에 저장하는 것을 가능하게 해준다.
  }
  return (
    <Upload03UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      defaultPicture={props.defaultPicture}
      onClickUploadImage={onClickUploadImage}
      onChangeImage={onChangeImage}
    />
  );
}
