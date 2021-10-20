import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int) {
    fetchPointTransactionsOfBuying(page: $page) {
      _id
      balance
      createdAt
      amount
      useditem {
        name
        # seller {
        #   name
        # }
        # buyer {
        #   name
        # }
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 34px;
`;
const RowName = styled.div`
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
const ColumnName = styled.div`
  width: 20%;
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
const Row = styled.div`
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

const Column = styled.div`
  width: 20%;
  text-align: center;
`;

export default function MyBuyPointPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING, {
    variables: { page: 1 },
  });
  return (
    <>
      <Wrapper>
        <RowName>
          <ColumnName>거래일</ColumnName>
          <ColumnName>상품명</ColumnName>
          <ColumnName>거래 내역</ColumnName>
          <ColumnName>거래 후 잔액</ColumnName>
          <ColumnName>판매자</ColumnName>
        </RowName>
        {data?.fetchPointTransactionsOfBuying.map((el) => (
          <Row key={el._id}>
            <Column>{el.createdAt.slice(0, 10)}</Column>
            <Column>{el.useditem.name}</Column>
            <Column>{el.amount}</Column>
            <Column>{el.balance}</Column>
            {/* <Column>{el.useditem?.buyer?.name}</Column> */}
          </Row>
        ))}
      </Wrapper>
    </>
  );
}
