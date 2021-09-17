import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRef } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div`
  height: 1000px;
  overflow: auto;
`;

const Comment = styled(InfiniteScroll)`
  width: 1000px;
  color: red;
`;

export default function InfiniteScrollPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const loader = useRef(null);

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  }

  return (
    <Wrapper ref={loader}>
      <div>
        <Comment
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true || false}
          useWindow={false}
        >
          {data?.fetchBoards.map((el) => (
            <div key={el._id}>
              <span>{el.writer}</span>
              <span>{el.title}</span>
              <span>{el.contents}</span>
            </div>
          ))}
        </Comment>
      </div>
    </Wrapper>
  );
}
