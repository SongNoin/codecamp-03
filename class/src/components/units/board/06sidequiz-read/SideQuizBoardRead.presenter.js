export default function SideQuizBoardReadUI(props) {
  return (
    <>
      <div>게시물 상세 페이지 입니다!!</div>
      <div>게시글 번호:{props.router.query.number}</div>
      <div>게시글 작성자: {props.data?.fetchBoard.writer}</div>
      <div>게시글 제목:{props.data?.fetchBoard.title}</div>
      <div>게시글 내용:{props.data?.fetchBoard.contents}</div>
    </>
  );
}
