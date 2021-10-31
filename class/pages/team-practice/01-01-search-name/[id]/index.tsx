import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int, $search: String, $isSoldout: Boolean) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;

export default function SearchTagListPage() {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });
  return (
    <>
      <div>
        {data?.fetchUseditems.map((el) => (
          <Wrapper key={el._id}>
            <div> 상품태그: {el.tags}</div>
            <div> 상품명: {el.name}</div>
            <div> 한줄요약: {el.remarks}</div>
            <div> 상품설명: {el.contents}</div>
            <div> 판매가격: {el.price}</div>
          </Wrapper>
        ))}
      </div>
    </>
  );
}
