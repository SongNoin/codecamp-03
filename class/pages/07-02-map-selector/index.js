import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Coulumn = styled.div`
  width: 20%;
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function MapSelectorPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS); // [{},{},{}]

  async function onClickDelete(event) {
    await deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }], // 중요 포인트 variavles도 같이 옮겨야함 (여기서는 넘길게 없어서 이렇게만)
    });
  }

  return (
    <div>
      {data?.fetchBoards.map(
        (
          el,
          index // 자주하는 실수 map 에서 key를 index로 주면 안된다(값이 두개가되기때문에)
        ) => (
          <Row key={el.number}>
            <Coulumn>
              <input type="checkbox" />
            </Coulumn>
            <Coulumn>{index}</Coulumn>

            <Coulumn>{el.title}</Coulumn>
            <Coulumn>{el.writer}</Coulumn>
            <Coulumn>{el.createdAt}</Coulumn>
            <Coulumn>
              <button id={el.number} onClick={onClickDelete}>
                삭제하기
              </button>
            </Coulumn>
          </Row>
        )
      )}
    </div>
  );
}
