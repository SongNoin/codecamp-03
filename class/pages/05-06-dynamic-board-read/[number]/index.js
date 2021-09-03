import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`; // query 는 mutation과 다르게 페이지가 열리는 동시에 실행됨 (mutation은 클릭등 행동을 할 때 실행됨 )
export default function DynamicBoardRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <>
      <div>게시물 상세 페이지 입니다!!</div>
      <div>게시글 번호:{router.query.number}</div>
      <div>게시글 작성자: {data?.fetchBoard.writer}</div>
      <div>게시글 제목:{data?.fetchBoard.title}</div>
      <div>게시글 내용:{data?.fetchBoard.contents}</div>
      {/* <div>게시글 작성자: {data ? data.fetchBoard.writer : "loading..."}</div>
      <div>게시글 제목:{data && data.fetchBoard.title}</div>
      <div>게시글 내용:{data && data.fetchBoard.contents}</div> */}
    </> // {data && data.fetchBoard.writer} && : 조건부 렌더링(있으면 표시하고 없으면 표시하지말고)
    // {data ? data.fetchBoard.writer: "loading..."} ?: 조건부 렌더링(삼항연산자 있으면 표시하고 없으면 "loading..." 표시하기)
    //{data?.fetchBoard.writer} : 옵셔널 체이닝(실무에서 가장 많이 씀)
  );
}
