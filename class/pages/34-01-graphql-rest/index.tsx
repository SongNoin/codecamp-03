import axios from "axios";

export default function GraphqlRestPage() {
  const onClickRequest = async () => {
    // useCallback 등을 쓰기 위해 화살표 함수로 많이 쓴다
    const result = await axios.post(
      "https://backend03.codebootcamp.co.kr/graphql",
      {
        query: `
            mutation createBoard {
                createBoard(
                    createBoardInput:{
                        writer : "김치",
                        password: "1234",
                        title: "찌개",
                        contents:"내용"
                    }
                ){
                    _id
                    writer
                }
            }
        `,
      }
    );
    // graphql은 query든 mutation 이든항상 post 여야함
    // 이유는 어차피 둘다 데이터를 보내는 작업이 필요하기 때문에
    console.log(result);
  };
  return (
    <>
      <div></div>
      <button onClick={onClickRequest}>
        클릭해서 Graphql을 axios로 요청하기!!!
      </button>
      {/* <div></div> 는 HTML이 아니라 JSX 다 */}
    </>
  );
}
