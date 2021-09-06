//html 을 위한 presenter
import { MyButton, Title } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // props로 받아줘야 함수와 변수도 옮겨간다.
  return (
    <>
      <Title qqq={props.qqq} onChangeColor={props.onChangeColor}>
        컨테이너 프리젠터 패턴!!
      </Title>
      작성자 : <input type="text" onChange={props.onChangeMyWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeMyTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeMyContents} />
      <br />
      <MyButton zzz={props.qqq} onClick={props.aaa}>
        GRAPHQL-API요청하기!
      </MyButton>
    </>
  );
}
