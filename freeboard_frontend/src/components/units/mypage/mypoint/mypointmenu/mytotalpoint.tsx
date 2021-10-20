import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

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
  width: 25%;
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
  width: 25%;
  text-align: center;
`;

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      status
      statusDetail
      balance
      createdAt
      amount
    }
  }
`;

export default function MyTotalPointPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });

  return (
    <>
      <Wrapper>
        <RowName>
          <ColumnName>날짜</ColumnName>
          <ColumnName>내용</ColumnName>
          <ColumnName>거래 및 충전 내역</ColumnName>
          <ColumnName>잔액</ColumnName>
        </RowName>
        {data?.fetchPointTransactions.map((el) => (
          <Row key={el._id}>
            <Column>{el.createdAt.slice(0, 10)}</Column>
            <Column>{el.status}</Column>
            <Column>{el.amount}</Column>
            <Column>{el.balance}</Column>
          </Row>
        ))}
      </Wrapper>
    </>
  );
}
