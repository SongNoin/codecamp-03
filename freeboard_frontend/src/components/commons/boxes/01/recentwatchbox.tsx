import styled from "@emotion/styled";
export default function RecentWatchBox() {
  const MyBox = styled.div`
    width: 196px;
    height: 505px;
    position: sticky;
    bottom: 500px;
    left: 3000px;

    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Title = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    margin-top: 20px;
  `;
  const RecentBox = styled.div`
    width: 156px;
    height: 199px;
    border: 1px solid #bdbdbd;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    :hover {
      background-color: #81d8b1;
    }
    cursor: pointer;
  `;
  const LikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  `;
  const Heart = styled.img`
    width: 15px;
    height: 14px;
    margin-right: 5px;
  `;
  const LikeCount = styled.div`
    margin-right: 10px;
  `;

  const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Photo = styled.div`
    width: 60px;
    height: 60px;
    background-color: gray;
  `;
  const Name = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
  `;
  const Subname = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
  `;
  const Price = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
  `;
  const Tag = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    margin-top: 8px;
  `;
  return (
    <MyBox>
      <Title>오늘 본 상품</Title>
      <RecentBox>
        <LikeWrapper>
          <Heart src="/images/heart.png" />
          <LikeCount>20</LikeCount>
        </LikeWrapper>
        <ProductWrapper>
          <Photo></Photo>
        </ProductWrapper>
        <Name>삼성전자 갤럭시탭A 10.1</Name>
        <Subname>2019 LTE 32GB</Subname>
        <Price>240,120원</Price>
        <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
      </RecentBox>
      <RecentBox>
        <LikeWrapper>
          <Heart src="/images/heart.png" />
          <LikeCount>20</LikeCount>
        </LikeWrapper>
        <ProductWrapper>
          <Photo></Photo>
        </ProductWrapper>
        <Name>삼성전자 갤럭시탭A 10.1</Name>
        <Subname>2019 LTE 32GB</Subname>
        <Price>240,120원</Price>
        <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
      </RecentBox>
    </MyBox>
  );
}
