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
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const ColumnAmount = styled.div`
  width: 25%;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ff1493;
`;

const ColumnBalance = styled.div`
  width: 25%;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
`;

const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($page: Int) {
    fetchPointTransactionsOfSelling(page: $page) {
      _id
      status
      statusDetail
      balance
      createdAt
      amount
      useditem {
        name
      }
    }
  }
`;

export default function MySellPointPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    variables: { page: 1 },
  });

  return (
    <>
      <Wrapper>
        <RowName>
          <ColumnName>거래일</ColumnName>
          <ColumnName>상품명</ColumnName>
          <ColumnName>거래내역</ColumnName>
          <ColumnName>거래 후 잔액</ColumnName>
        </RowName>
        {data?.fetchPointTransactionsOfSelling.map((el) => (
          <Row key={el._id}>
            <Column>{el.createdAt.slice(0, 10)}</Column>
            <Column>{el.useditem.name}</Column>
            <ColumnAmount>+ {el.amount.toLocaleString("ko-KR")}</ColumnAmount>
            <ColumnBalance>
              ￦ {el.balance.toLocaleString("ko-KR")}
            </ColumnBalance>
          </Row>
        ))}
      </Wrapper>
    </>
  );
}
