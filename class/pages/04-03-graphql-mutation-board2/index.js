import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
 mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  } 
`; //  어떤 문자열이든 넣을 준비가 되어있는 세팅 /apollo 매뉴얼에 나와있다/ $ 는 apollo 규칙 / String  은 playground에 써있는대로 똑같이 적어야 한다.

export default function GraphqlMutationBoard2Page() {
  const [createBoard] = useMutation(CREATE_BOARD);

  async function aaa() {
    const result = await createBoard({
      variables: { writer: "철수", title: "제목이에요!", contents: "내용!!" },
    }); //실행(요청) / variables 에 내용 입력/ 실행하는 시점에 내용을 넣어줌 /잘 됐는지 확인하려면 playground에서 query 해보기
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return <button onClick={aaa}>GRAPHQL-API요청하기</button>;
}
