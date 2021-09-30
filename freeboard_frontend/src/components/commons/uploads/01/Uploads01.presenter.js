import {
  UploadImage,
  UploadButton,
  UploadImageHidden,
} from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUploadImage} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUploadImage}>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      )}
      <UploadImageHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeImage}
      />
    </>
  );
}
