//html 을 위한 presenter
import { MyButton, Title } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // props로 받아줘야 함수와 변수도 옮겨간다.
  return (
    <>
      <h1>{props.isEdit ? " 수정페이지" : "등록페이지"}</h1>
      <Title qqq={true}>컨테이너 프리젠터 패턴!!</Title>
      작성자 :
      <input
        type="text"
        onChange={props.onChangeMyWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      {/* defaultValue 값이 창을 열었을때 부터 들어가 있다*/}
      <br />
      제목 :
      <input
        type="text"
        onChange={props.onChangeMyTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :
      <input
        type="text"
        onChange={props.onChangeMyContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      {!props.isEdit && (
        <MyButton zzz={true} onClick={props.aaa}>
          등록하기
        </MyButton>
      )}
      {props.isEdit && (
        <MyButton zzz={true} onClick={props.onClickEdit}>
          수정하기
        </MyButton>
      )}
    </>
  );
}
