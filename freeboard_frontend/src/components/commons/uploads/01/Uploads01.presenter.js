import {
  UploadImage,
  UploadButton,
  UploadImageHidden,
} from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUploadImage}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
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
