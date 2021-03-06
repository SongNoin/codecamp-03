import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 50px;
`;
const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;
interface IProps {
  isMatched: boolean;
}
const MyWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  //   const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event) {
    getDebounce(event.target.value);
  }

  //   function onClickSearch() {
  //     refetch({ search: mySearch, page: 1 });
  //     setMyKeyword(mySearch);
  //   }

  function onClickPage(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }
  return (
    <>
      <div>검색페이지!!!</div>
      검색어 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(myKeyword, `#$%${myKeyword}#$%`)
              .split("#$%")
              .map((el) => (
                <MyWord key={uuidv4()} isMatched={myKeyword === el}>
                  {el}
                </MyWord>
              ))}
          </Column>
          <Column>{el.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
