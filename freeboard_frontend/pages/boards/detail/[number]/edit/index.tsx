import NewWrite from "../../../../../src/components/units/board/new/New.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function NewEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: router.query.number,
  });
  return <NewWrite isEdit={true} data={data} />;
}
