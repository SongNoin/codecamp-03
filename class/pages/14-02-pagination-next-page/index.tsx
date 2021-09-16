import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PaginationNextPagePage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div>페이지 네이션(다음페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>

      {new Array(10).fill(1).map(
        // 배열안에 뭐라도 10개 넣어줘야지 10번 그려진다.
        (
          _,
          index // 안쓰는 값은 _ 로 표기
        ) => (
          <Page
            key={startPage + index}
            onClick={onClickPage}
            id={String(startPage + index)}
          >
            {startPage + index}
          </Page>
        )
      )}

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        // 배열안에 뭐라도 10개 넣어줘야지 10번 그려진다.
        (
          _,
          index // 안쓰는 값은 _ 로 표기
        ) => (
          <Page
            key={startPage + index}
            onClick={onClickPage}
            id={String(startPage + index)}
          >
            {startPage + index}
          </Page>
        )
      )} */}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
