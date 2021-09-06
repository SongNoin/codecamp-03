import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "경환", title: "복습", contents: "재밌다") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlCreateBoard() {
  const [createBoard] = useMutation(CREATE_BOARD);

  async function aaa() {
    const result = await createBoard();
    console.log(result);
    console.log(result.data.createBoard.number);
  }
  return <button onClick={aaa}>GRAPHQL-API 요청하기</button>;
}
