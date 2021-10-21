import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6170da6cb55052002a93d0f3" },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "6170da6cb55052002a93d0f3" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "6170e1c2b55052002a93d14b" },
      //     },
      //   ], // 이거는 리페치 될 때까지 기다려야됨
      optimisticResponse: {
        // 아폴로 클라이언트 캐시에 optimisticResponse버전으로 따로 저장된다.
        // 99% 확률로 성골할수 있는것만 써야한다.
        likeBoard: data?.fetchBoard.likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6170da6cb55052002a93d0f3" },
          data: {
            fetchBoard: {
              _id: "6170da6cb55052002a93d0f3",
              _typename: "Board",
              // _id 와 _typename 이 꼭 있어야 적용이 된다.
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 갯수 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
