export default function SideQuizBoardWriteUI(props) {
  return (
    <>
      작성자 : <input type="text" onChange={props.onChangeMyWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeMyTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeMyContents} />
      <br />
      <button onClick={props.aaa}>GRAPHQL-API요청하기</button>
    </>
  );
}
